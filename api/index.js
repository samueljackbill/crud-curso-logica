import express from "express"
import userRoutes from "./routes/alunos.js"
import cors from "cors"

const app = express()

app.use(express.json()) /* Importando o JSON para que seja possível manipular os dados em blocos de texto */
app.use(cors()) /* Importando o CORS para que evite conflitos ao rodar o projeto localmente */

app.use("/", userRoutes)

app.listen(8800) /* Porta que o Servidor Node estará funcionando */