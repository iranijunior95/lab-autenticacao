import mongoose from "mongoose";

export const Users = mongoose.model(
    'user',
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        },
        status: {
            type: String,
            enum: ["inactive", "active"],
            default: "active"
        },
        role: {
            type: String,
            enum: ["admin", "common_user"],
            default: "common_user",
            index: true
        }
    },
    {
        timestamps: true
    })
);