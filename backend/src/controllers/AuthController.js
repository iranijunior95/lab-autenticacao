import UserService from "../services/UserService.js";

async function registerNewUser(req, res) {
    const { name, email, password } = req.body;

    try {
        await UserService.createUser({ name, email, password });

        return res.status(201).json({ message: "Usuario criado com sucesso!" });
        
    } catch (error) {
        console.log(error.message || `Erro interno ao criar usuario: ${error.message}`);

        return res.status(error.statusCode || 500).json({ 
            message: error.message || `Erro interno ao criar usuario: ${error.message}` 
        });
    }
}

export default {
    registerNewUser
}