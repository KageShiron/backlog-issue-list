import actionCreatorFactory from "typescript-fsa";
import { IIssue } from "../backlog";
// import {IIssue} from "../backlog";

const actionCreator = actionCreatorFactory();

export const loadIssuesActions = {
  loadIssues: actionCreator.async<{ apiKey: string }, { issues: IIssue[] }>(
    "ACTION_LOAD"
  )
};
