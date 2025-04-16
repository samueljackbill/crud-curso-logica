import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/aluno.js";

const router = express.Router()

router.get("/", getUsers) /* Rota na raiz da aplicação */

router.post("/", addUser) /* Rota para criar usuário */

router.put("/:id", updateUser) /* Rota para editar usuário */

router.delete("/:id", deleteUser) /* Rota para excluir usuário */

export default router