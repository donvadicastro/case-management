import {BaseModel, LookupModel} from "../../../shared/entities/baseModel";

export interface CaseModel extends BaseModel {
  project: { id: string, name: string }
  description?: string

  actor: LookupModel
  action: LookupModel

  entity?: LookupModel
  query?: LookupModel
  function?: LookupModel
}
