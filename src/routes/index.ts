import { Router } from "express";
import { usersRoutes } from "./users-routes.js";
import { sessionsRoutes } from "./sessions-routes.js";
import { refundsRoutes } from "./refunds-routes.js";
import { ensureAuhenticated } from "@/middlewares/ensure-authentication.js";

const routes = Router()

routes.use("/users",usersRoutes)
routes.use("/sessions",sessionsRoutes)
//Rotas privadas
routes.use(ensureAuhenticated)
routes.use("/refunds",refundsRoutes)

export {routes}