import React from "react";
import PropTypes from "prop-types";

// state 에 대하여...

class App extends React.Component {
  // 동적 데이터 state
  state = {
    count: 0,
  };

  // 이벤트 메소드 작성
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };

  // calss 는 return 이 아닌 render 를 가지고 있다.
  // 클래스에서는 뷰를 뿌릴때  render 를 사용한다.
  // this.state.count state 사용때는 this 붙혀준다.

  render() {
    return (
      <div>
        {" "}
        <h1>Im a class {this.state.count}</h1>
        <button onClick={this.add}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
