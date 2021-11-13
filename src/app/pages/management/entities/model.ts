import {BaseModel, LookupModel} from "../../../shared/entities/baseModel";

export interface EntityModel extends BaseModel {
  name: string
  type: 'string' | 'number' | 'calculated' | 'reference' | 'key'
  formula?: string
  reference?: LookupModel
  description?: string
}
