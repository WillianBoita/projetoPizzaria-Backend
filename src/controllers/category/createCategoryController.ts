import { CreateCategoryService } from "../../services/category/createCategoryService";
import { Request, Response } from "express";

export class CreateCategoryController {
  async handle(req: Request, res: Response){
    const { name } = req.body

    const createCategoryService = new CreateCategoryService()
    const response = await createCategoryService.execute({name})

    return res.status(201).json(response)
  }
}