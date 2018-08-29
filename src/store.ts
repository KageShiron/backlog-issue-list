import { combineReducers, createStore } from "redux";
import { issueReducer, IssueState } from "./states/issueState";

export interface IAppState {
  issue: IssueState;
}

const store = createStore(
  combineReducers<IAppState>({
    issue: issueReducer
  })
);

export default store;
