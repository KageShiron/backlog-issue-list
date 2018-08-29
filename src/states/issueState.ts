import { reducerWithInitialState } from "typescript-fsa-reducers";
import { loadIssuesActions } from "../actions/loadAction";
import { IIssue } from "../backlog";

export interface IssueState {
  issues: IIssue[];
}

const initialState: IssueState = {
  issues: []
};

export const issueReducer = reducerWithInitialState(initialState).case(
  loadIssuesActions.loadIssues,
  (state, name) => {
    return Object.assign({}, state, { name });
  }
);
