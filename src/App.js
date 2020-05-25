import React from "react";
import PropTypes from "prop-types";

// state 에 대하여...

class App extends React.Component {
  // 동적 데이터 state
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading...." : "We are ready"}</div>;
  }
}

export default App;
