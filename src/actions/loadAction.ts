import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const loadIssuesActions = {
  loadIssues: actionCreator("ACTION_LOAD")
};
