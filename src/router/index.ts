import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import routes from "./routes";
import { documentTitle, onActivate } from "./middlewaries";
import { IDependencies } from "./types";
import { Router } from "router5/dist/types/router";

export default function createAppRouter(
  dependencies: IDependencies,
): Router<IDependencies> {
  const router = createRouter<IDependencies>(
    routes,
    {
      allowNotFound: true,
      queryParamsMode: "loose",
      autoCleanUp: true,
    },
    dependencies,
  );

  router.usePlugin(browserPlugin());

  router.useMiddleware(onActivate);
  router.useMiddleware(documentTitle);

  return router;
}
