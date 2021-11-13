import {BaseModel, LookupModel} from "../../../shared/entities/baseModel";

export interface CaseModel extends BaseModel {
  parentId: string
  description?: string

  actor: LookupModel
  action: LookupModel
  type: 'entity' | 'query' | 'function'

  entity?: LookupModel
  query?: LookupModel
  function?: LookupModel
}
