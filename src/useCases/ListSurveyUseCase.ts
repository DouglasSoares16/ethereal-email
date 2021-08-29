import { getCustomRepository } from "typeorm";
import { SurveysRepositories } from "../repositories/SurveysRepositories";

class ListSurveyUseCase {
  async execute() {
    const surveyRepository = getCustomRepository(SurveysRepositories);

    const surveys = await surveyRepository.find();

    return surveys;
  }
}

export { ListSurveyUseCase }