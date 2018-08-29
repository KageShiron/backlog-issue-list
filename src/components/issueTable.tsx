import * as React from "react";
import { IssueActions } from "../containers/issueContainer";
import { IssueState } from "../states/issueState";

// interface OwnProps {}

type IssueTableProps = /*OwnProps &*/ IssueState & IssueActions;

export const IssueTable: React.SFC<IssueTableProps> = (
  props: IssueTableProps
) => {
  return (
    <div>
      <div className="field">{props.issues.length}</div>
    </div>
  );
};
