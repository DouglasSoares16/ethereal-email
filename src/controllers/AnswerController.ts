import { Request, Response } from "express";
import { answerUseCase } from "../useCases";

class AnswerController {
  async handle(request: Request, response: Response) {
    const { value } = request.params;
    const user = request.query.u;

    const u = String(user);

    const answer = await answerUseCase.execute({ value, u });

    return response.json(answer);
  }
}

export { AnswerController }