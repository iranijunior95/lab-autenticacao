import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 3001;
const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
const JWT_SECRET = process.env.JWT_SECRET;

export {
    PORT,
    DATABASE_CONNECTION_STRING,
    SALT_ROUNDS,
    JWT_SECRET
}