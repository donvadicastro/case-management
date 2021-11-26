import {BaseModel} from "../../../shared/entities/baseModel";

export interface ProjectModel extends BaseModel {
  name: string
  isTemplate: boolean
}
