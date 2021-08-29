import { Request, Response } from "express";
import { createUserUseCase } from "../useCases";
import * as yup from "yup";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      name,
      email,
    } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required()
    });

    if(!(await schema.isValid(request.body))) {
      throw new Error("Validation Failed!");
    }

    const user = await createUserUseCase.execute({
      name,
      email,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController }