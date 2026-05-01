import UserService from "../services/UserService.js";
import AuthService from "../services/AuthService.js";

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

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const dataReturned = await AuthService.login({ email, password });

        res.cookie("token", dataReturned.token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000,
            path: "/"
        });

        return res.status(200).json({ 
            message: "Login realizado com sucesso",
            user: {
                name: dataReturned.user.name,
                email: dataReturned.user.email
            } 
        });

    } catch (error) {
        console.log(error.message || `Erro interno ao fazer login: ${error.message}`);

        return res.status(error.statusCode || 500).json({ 
            message: error.message || `Erro interno ao fazer login: ${error.message}` 
        });
    }
}

function logout(req, res) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/"
    });

    return res.status(200).json({
        message: "Logout realizado com sucesso"
    });
}

async function returnsMeAuthentication(req, res) {
    const { id } = req.user;

    try {
        const userData = await UserService.searchForUserById(id);

        return res.status(200).json({
            message: "User localizado com sucesso!",
            user: {
                id: userData._id,
                name: userData.name,
                email: userData.email,
                avatar: userData.avatar
            }
        });

    } catch (error) {
        console.log(error.message || `Erro interno ao buscar user: ${error.message}`);

        return res.status(error.statusCode || 500).json({
            message: error.message || `Erro interno ao buscar user: ${error.message}`
        });
    }
}

export default {
    registerNewUser,
    login,
    logout,
    returnsMeAuthentication
}