import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepositories extends Repository<SurveyUser> {}

export { SurveysUsersRepositories }