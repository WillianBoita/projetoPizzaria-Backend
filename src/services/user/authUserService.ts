import prismaClient from "../../prisma/index"
import { compare } from "bcryptjs"

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

    const isPasswordValid = compare(password, user.password)

    if(!isPasswordValid) {
      throw new Error("Credenciais inválidas.")
    }

    return user

  }
}