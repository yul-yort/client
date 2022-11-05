import { BaseVM } from "../BaseVM";
import { IAppVM, TTheme } from "./types";
import { makeObservable, observable } from "mobx";
import { CONSTANTS } from "../../../constants";

export class AppVM extends BaseVM implements IAppVM {
  theme: TTheme;

  constructor() {
    super();
    makeObservable(this, {
      theme: observable,
    });
    // TODO получать через сервис?
    this.theme =
      localStorage.getItem(CONSTANTS.themeKey) === "dark" ? "dark" : "light";
  }

  setTheme(theme: TTheme) {
    try {
      // TODO сохранять через сервис?
      localStorage.setItem(CONSTANTS.themeKey, theme);
      this.theme = theme;
    } catch (err) {
      throw err;
    }
  }
}
