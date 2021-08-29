import { Request, Response } from "express";
import { createSurveyUseCase } from "../useCases"

class CreateSurveyController {
  async handle(request: Request, response: Response) {
    const {
      title,
      description
    } = request.body;

    const survey = await createSurveyUseCase.execute({
      title,
      description
    });

    return response.status(201).json(survey);
  }
}

export { CreateSurveyController }