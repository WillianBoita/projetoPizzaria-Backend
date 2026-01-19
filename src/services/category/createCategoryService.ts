import prismaClient from "../../prisma/index"

interface CreateCategoryProps {
  name: string
}

export class CreateCategoryService {
  async execute({ name }: CreateCategoryProps){

    const categoryExists = await prismaClient.category.findFirst({
      where: {
        name
      }
    })

    if(categoryExists) {
      throw new Error("Uma categoria com esse nome já existe.")
    }

    try {
      const response = await prismaClient.category.create({
        data: {
          name
        },
        select: {
          id: true,
          name: true,
          createdAt: true
        }
      })

      return response
    } catch (error) {
      throw new Error(`Erro: ${error}`)
    }
  }
}