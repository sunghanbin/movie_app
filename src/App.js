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
    // state 는 직접적으로 값을 변경 불가하다. setter 로 해야함
    // set 안에서 함수로 state 현재값을 가져올수있다.
    this.setState((a) => ({ count: a.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
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
