import prismaClient from "../../prisma/index";

export class DetailUserService {
  async execute(user_id: string){
    
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          id: user_id
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true
        }
      })
  
      if(!user) {
        throw new Error("Esse usuário não existe.")
      }
  
      return user
    } catch (error) {
      throw new Error(`Erro: ${error}`)
    }
  }
}