import { Router } from "express";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import AuthController from "../controllers/AuthController.js";

const authRouter = Router();

authRouter.post("/auth/register-user", AuthMiddleware.validateUserRegistrationData, AuthController.registerNewUser);

export default authRouter;