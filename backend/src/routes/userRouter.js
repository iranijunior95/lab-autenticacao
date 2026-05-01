import { Router } from "express";
import UserController from "../controllers/UserController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const userRouter = Router();

userRouter.get("/profile", AuthMiddleware.validateAccessAuthentication, UserController.searchForUserById);

export default userRouter;