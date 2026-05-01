import UserService from "../services/UserService.js";

async function searchForUserById(req, res) {
    const { id } = req.user;

    try {
        const userData = await UserService.searchForUserById(id);

        return res.status(200).json({ 
            message: "User localizado com sucesso!",
            user: {
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
    searchForUserById
}