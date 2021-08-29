import { Request, Response } from "express";
import { sendMailUseCase } from "../useCases";

class SendMailController {
  async handle(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const sendMail = await sendMailUseCase.execute({
      email,
      survey_id
    });

    return response.status(201).json(sendMail);
  }
}

export { SendMailController }