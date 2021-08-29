import { AnswerController } from "./AnswerController";
import { CreateSurveyController } from "./CreateSurveyController";
import { CreateUserController } from "./CreateUserController";
import { ListSurveyController } from "./ListSurveyController";
import { NpsController } from "./NpsController";
import { SendMailController } from "./SendMailController";

const createUserController = new CreateUserController();
const createSurveyController = new CreateSurveyController();
const listSurveyController = new ListSurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

export {
  createUserController,
  createSurveyController,
  listSurveyController,
  sendMailController,
  answerController,
  npsController
}