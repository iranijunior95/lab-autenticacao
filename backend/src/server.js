import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import { connectDatabase } from "./config/databaseConnect.js";
import { PORT } from "./config/environmentVariables.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

connectDatabase()
.then(() => {
    console.log(`🟢 Banco de Dados conectado com sucesso!`);

    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));
})
.catch((error) => {
    console.log(`🔴 Erro ao conectar ao Banco de Dados: ${error.message}`);

    process.exit(1);
})
