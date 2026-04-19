import mongoose from "mongoose";
import { DATABASE_CONNECTION_STRING } from "./environmentVariables.js";

export function connectDatabase() {
    return mongoose.connect(DATABASE_CONNECTION_STRING, {
        serverSelectionTimeoutMS: 5000 //limita um tempo para o app não travar esperando conectar
    });
}