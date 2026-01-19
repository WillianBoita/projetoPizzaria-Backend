import { Router } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";
import { CreateCategoryController } from "./controllers/category/createCategoryController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { validadteSchema as validateSchema } from "./middlewares/validateSchema";
import { createUserSchema, authUserSchema } from "./schemas/userSchema";

const router = Router();

router.post("/users", validateSchema(createUserSchema), new CreateUserController().handle)
router.post("/session", validateSchema(authUserSchema), new AuthUserController().handle)

router.get("/me", isAuthenticated, new DetailUserController().handle)
router.post("/category", isAuthenticated, new CreateCategoryController().handle)

export { router };