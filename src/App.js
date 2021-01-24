import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      count: 1,
      arry: [5, 6, 7],
    };
  }

  reset() {
    this.setState((state) => {
      return { count: 1 };
    });
  }

  incrementCount() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  learning() {
    this.incrementCount();
  }

  createbuttons() {
    return (
      <div>
        Hello creation<button>CREATE</button>
      </div>
    );
  }

  render() {
    var { flag, count, arry } = this.state;

    const training = (
      <div>
        {flag} {count} {arry}
      </div>
    );

    const creation = this.createbuttons();

    return (
      <div>
        {training}

        <button onClick={() => this.learning()}>
          This is only the beginning {count}
        </button>
        <button onClick={() => this.reset()}>RESET</button>

        {creation}
      </div>
    );
  }
}

export default App;
