import { getCustomRepository } from "typeorm";
import { SurveysRepositories } from "../repositories/SurveysRepositories";

interface ISurveyRequest {
  title: string;
  description: string;
}

class CreateSurveyUseCase {
  async execute({ title, description }: ISurveyRequest) {
    const surveysRepository = getCustomRepository(SurveysRepositories);

    const survey = surveysRepository.create({
      title,
      description
    });

    await surveysRepository.save(survey);

    return survey;
  }
}

export { CreateSurveyUseCase }