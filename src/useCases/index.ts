import { AnswerUseCase } from "./AnswerUseCase";
import { CreateSurveyUseCase } from "./CreateSurveyUseCase";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ListSurveyUseCase } from "./ListSurveyUseCase";
import { NpsUseCase } from "./NpsUseCase";
import { SendMailUseCase } from "./SendMailUseCase";

const createUserUseCase = new CreateUserUseCase();
const createSurveyUseCase = new CreateSurveyUseCase();
const listSurveyUseCase = new ListSurveyUseCase();
const sendMailUseCase = new SendMailUseCase();
const answerUseCase = new AnswerUseCase();
const npsUseCase = new NpsUseCase();

export {
  createUserUseCase,
  createSurveyUseCase,
  listSurveyUseCase,
  sendMailUseCase,
  answerUseCase,
  npsUseCase
}