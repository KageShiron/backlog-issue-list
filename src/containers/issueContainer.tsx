import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "typescript-fsa";
import { loadIssuesActions } from "../actions/loadAction";
import { IssueTable } from "../components/issueTable";
import { IAppState } from "../store";

export interface IssueActions {
  loadIssues: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loadIssues: (v: string) => dispatch(loadIssuesActions.loadIssues())
  };
}

function mapStateToProps(appState: IAppState) {
  return Object.assign({}, appState.issue);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueTable);
