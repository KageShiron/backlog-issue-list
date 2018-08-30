import { reducerWithInitialState } from "typescript-fsa-reducers";
import { loadIssuesActions } from "../actions/loadAction";
import { IIssue } from "../backlog";

export interface IssuesState {
  issues: IIssue[];
}

const initialState: IssuesState = {
  issues: []
};

export const issueReducer = reducerWithInitialState(initialState).case(
  loadIssuesActions.loadIssues.done,
  (state, value) => ({
    ...state,
    issues: value.result.issues
  })
);
