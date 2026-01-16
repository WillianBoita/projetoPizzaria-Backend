import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import "dotenv/config"

const app = express();

app.use(express.json())
app.use(cors)

const PORT = process.env.PORT! || 3333

app.listen(PORT, () => {
  console.log("Servidor rodando em localhost:" + PORT)
})