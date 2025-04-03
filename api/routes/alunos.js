import express from "express";
import { getUsers } from "../controllers/aluno.js";

const router = express.Router()

router.get("/", getUsers) /* Rota na raiz da aplicação */

export default router