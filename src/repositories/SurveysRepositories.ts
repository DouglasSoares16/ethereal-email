import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";

@EntityRepository(Survey)
class SurveysRepositories extends Repository<Survey>{}

export { SurveysRepositories }