import * as React from "react";
import { IssueActions } from "../containers/issueContainer";
import { IssuesState } from "../states/issueState";
// interface OwnProps { apiKey2 : string}

type IssueTableProps = /*OwnProps &*/ IssuesState & IssueActions;
interface IssueTableState {
  apiKey: string;
}

export class IssueTable extends React.Component<
  IssueTableProps,
  IssueTableState
> {
  constructor(props: IssueTableProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChang = this.handleChang.bind(this);
    this.state = {
      apiKey: ""
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <input
          type="text"
          value={this.state.apiKey}
          onChange={this.handleChang}
        />
        <input type="button" onClick={this.handleClick} value="更新" />
        <div className="field">{this.props.issues.length}</div>
      </div>
    );
  }

  private handleClick(): void {
    // tslint:disable
    this.props.loadIssues({ apiKey: this.state.apiKey });
  }

  private handleChang(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ apiKey: e.target.value });
  }
}

/*
export const IssueTable: React.SFC<IssueTableProps> = ({
  issues,
  clickHandler}
) => {
  return (
    <div>
      <input type="button" onClick={ clickHandler } />
      <div className="field">{issues.length}</div>
    </div>
  );
};

IssueTable.defaultProps = {
  issues : this.props.issue,
  clickHandler : e=>{this.loadIssues({apiKey:""})}
}*/
