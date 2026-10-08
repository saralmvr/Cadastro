import 'dotenv/config'
import express from 'express'
import connectDB from './config/db.js'
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()

app.use(express.json())

connectDB()

app.use('/usuarios', usuarioRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})