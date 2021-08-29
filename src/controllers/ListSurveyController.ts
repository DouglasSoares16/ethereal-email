import { Request, Response } from "express";
import { listSurveyUseCase } from "../useCases";

class ListSurveyController {
  async handle(request: Request, response: Response) {
    const surveys = await listSurveyUseCase.execute();

    return response.json(surveys);
  }
}

export { ListSurveyController }