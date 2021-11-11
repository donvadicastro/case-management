import {BaseModel} from "../../../shared/entities/baseModel";

export interface CaseModel extends BaseModel {
  project: { id: string, name: string }
  title: string
  description: string
}
