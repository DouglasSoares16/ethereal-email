import { Request, Response } from "express";
import { npsUseCase } from "../useCases";

class NpsController {
  async handle(request: Request, response: Response) {
    const { survey_id } = request.params;

    const npsCalc = await npsUseCase.execute(survey_id);

    return response.json(npsCalc);
  }
}

export { NpsController }