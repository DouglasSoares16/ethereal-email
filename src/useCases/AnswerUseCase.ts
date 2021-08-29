import { getCustomRepository } from "typeorm";
import { SurveysUsersRepositories } from "../repositories/SurveysUsersRepositories";

interface IRequest {
  value: string;
  u: string;
}

class AnswerUseCase {
  async execute({ value, u }: IRequest) {
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepositories);

    const surveyUser = await surveysUsersRepository.findOne({
      id: u
    });

    if(!surveyUser) {
      throw new Error("Survey User does not exists!");
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return surveyUser;
  }
}

export { AnswerUseCase }