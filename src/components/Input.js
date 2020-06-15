/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author MongLV@bkav.com on 15/6/2020.
 * email: levanmong.dola.99@gmail.com
 */
"use-strict";

import React, { Component } from "react";

// Styles
import "./styles/styles.css";
import { Row, Input } from "antd";

class InputCom extends Component {
  constructor(props) {
    super(props);
    console.log("Run constructor");
  }

  render() {
    return (
      <Row>
        <Input />
      </Row>
    );
  }
}
export default InputCom;
