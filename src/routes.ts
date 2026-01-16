import { Router } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { validadteSchema } from "./middlewares/validateSchema";
import { createUserSchema } from "./schemas/userSchema";

const router = Router();

router.post("/users", validadteSchema(createUserSchema), new CreateUserController().handle)

export { router };