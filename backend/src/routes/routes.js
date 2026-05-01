import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).json({ message: "Olá mundo, router" });
});

router.use("/api", authRouter);
router.use("/api", userRouter);

export default router;