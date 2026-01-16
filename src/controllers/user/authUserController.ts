import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/authUserService";

export class AuthUserController {
  async handle(req: Request, res: Response){
    const { email, password } = req.body

    const authUserService = new AuthUserService()
    const response = await authUserService.execute({email, password})

    return res.json(response)
  }
}