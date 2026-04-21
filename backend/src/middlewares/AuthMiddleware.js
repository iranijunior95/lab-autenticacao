import validator from "validator";

function validateUserRegistrationData(req, res, next) {
    const { name, email, password } = req.body;

    const errors = [];

    if(!name || typeof name !== "string" || name.trim() === "") {
        errors.push({ field: "name", message: "O campo name é obrigatório" });
    }

    if(!email || typeof email !== "string" || email.trim() === "") {
        errors.push({ field: "email", message: "O campo email é obrigatório" });
    }

    if(email && typeof email === "string" && email.trim() !== "" && !validator.isEmail(email)) {
        errors.push({ field: "email", message: "O campo email não é um email valido" });
    }

    if(!password || typeof password !== "string" || password.trim() === "") {
        errors.push({ field: "password", message: "O campo password é obrigatório" });
    }

    if(password && typeof password === "string" && password.trim() !== "" && password.length < 6) {
        errors.push({ field: "password", message: "O campo password precisar ter no minimo 6 caracteres" });
    }

    if(errors.length > 0) {
        return res.status(422).json({
            message: "Erros de validação",
            errors
        });
    }

    next();
}

export default {
    validateUserRegistrationData
}