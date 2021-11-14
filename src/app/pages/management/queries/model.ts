import {BaseModel, LookupModel} from "../../../shared/entities/baseModel";

export interface QueryModel extends BaseModel {
  name: string
  from: LookupModel
  select: LookupModel[],
  where: string
  description?: string
}
