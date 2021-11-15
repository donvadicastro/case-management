export type LookupModel = { id: string, name?: string }

export interface BaseModel extends LookupModel {
  parentId?: string
  createdBy: LookupModel
  createdOn: Date
}
