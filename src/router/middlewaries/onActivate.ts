import { IDependencies } from "../types";
import { MiddlewareFactory } from "router5/dist/types/router";

export const onActivate: MiddlewareFactory<IDependencies> =
  (_, dependencies) =>
  (toState): boolean => {
    const route = dependencies.routes.find(
      (route) => route.name === toState.name,
    );

    route?.onActivate && route?.onActivate(dependencies.store, toState.params);

    return true;
  };
