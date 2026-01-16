import prismaClient from "../../prisma/index"
import { hash } from 'bcryptjs'

interface CreateUserProps {
  name: string,
  email: string,
  password: string
}

export class CreateUserService {
  async execute({ name, email, password }: CreateUserProps){
    
    const userExists = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if(userExists) {
      throw new Error("Usuário com esse email já existe.");
    }

    const passwordHash = await hash(password, 8)

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    return newUser.name;

  }
}