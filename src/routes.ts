import { Router } from "express";

import {
  createUserController,
  createSurveyController,
  listSurveyController,
  sendMailController,
  answerController,
  npsController
} from "./controllers";

const router = Router();

router.post("/users", createUserController.handle);

router.post("/surveys", createSurveyController.handle);
router.get("/surveys", listSurveyController.handle);

router.post("/sendMail", sendMailController.handle);

router.get("/answers/:value", answerController.handle);

router.get("/nps/:survey_id", npsController.handle);

export { router }