import actionCreatorFactory from "typescript-fsa";
// import {IIssue} from "../backlog";

const actionCreator = actionCreatorFactory();

export const loadIssuesActions = {
  loadIssues: actionCreator.async<{ apiKey: string }, { apiKey: string }>(
    "ACTION_LOAD"
  )
};
