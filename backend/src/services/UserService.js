import bcrypt from "bcrypt";
import { Users } from "../models/UserModel.js";
import AppError from "../utils/erros.js";
import { SALT_ROUNDS } from "../config/environmentVariables.js";

async function createUser({ name, email, password }) {
    const normalizedName = name.toLowerCase();
    const normalizedEmail = email.toLowerCase();

    const nameAlreadyExists = await Users.findOne({ name: normalizedName });

    if(nameAlreadyExists) {
        throw AppError("Já existe um usuário cadastrado com esse name!", 409);
    }

    const emailAlreadyExists = await Users.findOne({ email: normalizedEmail });

    if(emailAlreadyExists) {
        throw AppError("Já existe um usuário cadastrado com esse email!", 409);
    }

    const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const userCreated = await Users.create({
        name: normalizedName,
        email: normalizedEmail,
        password: encryptedPassword
    });

    return userCreated;
}

export default {
    createUser
}

