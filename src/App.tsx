import * as React from "react";
import "./App.css";

import IssueContainer from "../src/containers/issueContainer";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <IssueContainer />
      </div>
    );
  }
}

export default App;
