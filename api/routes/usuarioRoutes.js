import { Router } from 'express'
import Usuario from '../models/Usuario.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar usuários" })
    }
})

router.post('/', async (req, res) => {
    try {
        const novoUsuario = await Usuario.create(req.body)
        res.status(201).json(novoUsuario)
    } catch (error) {
        res.status(400).json({ erro: "Erro ao criar usuário", detalhe: error.message })
    }
})

export default router