import React from "react";

// Components
import GetListContainer from "./containers/GetListContainer";
import InputContainer from "./containers/InputContainer";

// Styles
import "./index.css";
import { Row } from "antd";
function App() {
  return (
    <div className="App">
      <h1>Todo List Redux-Saga</h1>
      {/* Code ở dưới đây */}
      <Row>
        <InputContainer />
        <GetListContainer />
      </Row>
    </div>
  );
}

export default App;
