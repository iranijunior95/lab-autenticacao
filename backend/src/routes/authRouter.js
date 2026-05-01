import { Router } from "express";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import AuthController from "../controllers/AuthController.js";

const authRouter = Router();

authRouter.post("/auth/register-user", AuthMiddleware.validateUserRegistrationData, AuthController.registerNewUser);
authRouter.post("/auth/login", AuthMiddleware.validateLoginData, AuthController.login);
authRouter.get("/auth/logout", AuthController.logout);

authRouter.get("/auth/me", AuthMiddleware.validateAccessAuthentication, AuthController.returnsMeAuthentication);

export default authRouter;