import {BaseModel, LookupModel} from "../../../shared/entities/baseModel";

export interface QueryModel extends BaseModel {
  name: string
  from: LookupModel
  select: string
  where: string
  description?: string
}
