import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/createUserService";

export class CreateUserController {
  async handle(req: Request, res: Response){
    const { name, email, password } = req.body

    const createUserService = new CreateUserService()
    const response = await createUserService.execute({name, email, password})

    return res.json(response)
  }
}