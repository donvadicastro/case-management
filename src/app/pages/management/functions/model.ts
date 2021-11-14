import {BaseModel} from "../../../shared/entities/baseModel";

export interface FunctionModel extends BaseModel {
  name: string
  description: string

  return: {
    type: 'value' | 'list'
    default?: string
  }
}
