import prismaClient from "../../prisma/index"

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

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password
      }
    });

    return newUser.name;

  }
}