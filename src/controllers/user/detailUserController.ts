import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/detailUserService";

export class DetailUserController {
  async handle(req: Request, res: Response){
    const { user_id } = req.body

    const detailUserService = new DetailUserService()
    const userDetail = await detailUserService.execute(user_id as string)

    return res.json(userDetail)
  }
}