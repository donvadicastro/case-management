import {BaseModel, LookupModel} from "../../../shared/entities/baseModel";

export interface PropertyModel extends BaseModel {
  type: 'string' | 'number' | 'calculated' | 'reference' | 'key'
  formula?: string
  reference?: LookupModel
  description?: string
}
