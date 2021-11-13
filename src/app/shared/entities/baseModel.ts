export type LookupModel = { id: string, name: string | null };

export interface BaseModel {
  id: string
  parentId?: string
  createdBy: LookupModel
  createdOn: Date
}
