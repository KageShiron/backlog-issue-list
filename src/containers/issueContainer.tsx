import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "typescript-fsa";
import { loadIssuesActions } from "../actions/loadAction";
import { IIssue } from "../backlog";
import { IssueTable } from "../components/issueTable";
import { IAppState } from "../store";

export interface IssueActions {
  loadIssues: (v: { apiKey: string }) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loadIssues: (v: { apiKey: string }) => {
      dispatch(loadIssuesActions.loadIssues.started(v));

      // tslint:disable
      console.log(v);
      fetch(
        "https://sechack365.backlog.jp/api/v2/issues?apiKey=" + v.apiKey
      ).then(x => {
        x.json().then(j => {
          dispatch(
            loadIssuesActions.loadIssues.done({
              params: v,
              result: { issues: j as IIssue[] }
            })
          );
        });
      });
    }
  };
}

function mapStateToProps(appState: IAppState) {
  // tslint:disable
  console.log(appState);
  return Object.assign({}, appState.issue);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueTable);
