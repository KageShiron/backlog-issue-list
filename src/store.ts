import { applyMiddleware, combineReducers, createStore } from "redux";
import { issueReducer, IssuesState } from "./states/issueState";

export interface IAppState {
  issue: IssuesState;
}

const store = createStore(
  combineReducers<IAppState>({
    issue: issueReducer
  }),
  applyMiddleware()
);

export default store;
