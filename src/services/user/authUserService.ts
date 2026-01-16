import prismaClient from "../../prisma/index"
import { compare } from "bcryptjs"
import { sign } from 'jsonwebtoken'

interface AuthUserProps {
  email: string,
  password: string
}

export class AuthUserService {
  async execute({ email, password }: AuthUserProps){

    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if(!user){
      throw new Error("Credenciais inválidas.")
    }

    const isPasswordValid = await compare(password, user.password)

    if(!isPasswordValid) {
      throw new Error("Credenciais inválidas.")
    }

    const token = sign({
      name: user.name,
      email: user.email
    }, process.env.JWT_SECRET! as string, {
      subject: user.id,
      expiresIn: "30d"
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: token
    }

  }
}