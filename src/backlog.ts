export interface IIssue {
  id: number;
  projectId: number;
  issueKey: string;
  keyId: number;
  issueType: IIssueType;
  summary: string;
  description: string;
  resolution?: null;
  priority: IPriorityOrStatus;
  status: IPriorityOrStatus;
  assignee: IAssigneeOrCreatedUserOrUpdatedUser;
  category?: ICategoryEntity[] | null;
  versions?: any; // (null)[] | null;
  milestone?: IMilestoneEntity[] | null;
  startDate?: string | null;
  dueDate?: string | null;
  estimatedHours?: number | null;
  actualHours?: null;
  parentIssueId?: number | null;
  createdUser: IAssigneeOrCreatedUserOrUpdatedUser;
  created: string;
  updatedUser: IAssigneeOrCreatedUserOrUpdatedUser;
  updated: string;
  customFields?: any;
  attachments?: any;
  sharedFiles?: any;
  stars?: any;
  // customFields?: (null)[] | null;
  // attachments?: (null)[] | null;
  // sharedFiles?: (null)[] | null;
  // stars?: (null)[] | null;
}
export interface IIssueType {
  id: number;
  projectId: number;
  name: string;
  color: string;
  displayOrder: number;
}
export interface IPriorityOrStatus {
  id: number;
  name: string;
}
export interface IAssigneeOrCreatedUserOrUpdatedUser {
  id: number;
  userId?: null;
  name: string;
  roleType: number;
  lang: string;
  mailAddress?: null;
  nulabAccount: INulabAccount;
}
export interface INulabAccount {
  nulabId: string;
  name: string;
  uniqueId: string;
}
export interface ICategoryEntity {
  id: number;
  name: string;
  displayOrder: number;
}
export interface IMilestoneEntity {
  id: number;
  projectId: number;
  name: string;
  description: string;
  startDate?: null;
  releaseDueDate?: null;
  archived: boolean;
  displayOrder: number;
}
