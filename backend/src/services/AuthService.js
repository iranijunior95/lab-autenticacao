import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "../models/UserModel.js";
import AppError from "../utils/erros.js";
import { JWT_SECRET } from "../config/environmentVariables.js";

async function login({ email, password }) {
    const normalizedEmail = email.toLowerCase();

    const locatedUser = await Users.findOne({ email: normalizedEmail, status: "active" }).lean();

    if(!locatedUser) {
        throw AppError("Email ou Password incorretos!", 401);
    }

    const passwordValidated = await bcrypt.compare(password, locatedUser.password);

    if(!passwordValidated) {
        throw AppError("Email ou Password incorretos!", 401);
    }

    const payload = {
        id: locatedUser._id,
        role: locatedUser.role
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "5m" });

    return {
        token,
        user: {
            id: locatedUser._id,
            name: locatedUser.name,
            email: locatedUser.email,
            role: locatedUser.role,
        }
    };
}

export default {
    login
}