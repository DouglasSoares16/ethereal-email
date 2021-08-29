import { getCustomRepository } from "typeorm";
import { resolve } from "path";

import { UsersRepositories } from "../repositories/UsersRepositories";
import { SurveysRepositories } from "../repositories/SurveysRepositories";
import { SurveysUsersRepositories } from "../repositories/SurveysUsersRepositories";
import SendMailService from "../services/SendMailService";

interface IRequest {
  email: string;
  survey_id: string;
}

class SendMailUseCase {
  async execute({ email, survey_id }: IRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const surveysRepository = getCustomRepository(SurveysRepositories);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepositories);

    const user = await usersRepository.findOne({
      email
    });

    if (!user) {
      throw new Error("User not exists!");
    }

    const survey = await surveysRepository.findOne(survey_id);

    if (!survey) {
      throw new Error("Survey does not exists!");
    }

    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: {
        user_id: user.id,
        value: null
      }
    });

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      id: "",
      link: process.env.URL_MAIL
    }

    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

    if (surveyUserAlreadyExists) {
      variables.id = surveyUserAlreadyExists.id;
      await SendMailService.execute(email, survey.title, variables, npsPath);
      return surveyUserAlreadyExists;
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id
    });

    await surveysUsersRepository.save(surveyUser);

    variables.id = surveyUser.id;

    await SendMailService.execute(email, survey.title, variables, npsPath);

    return surveyUser;
  }
}

export { SendMailUseCase }