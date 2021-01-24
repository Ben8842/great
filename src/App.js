import "./App.css";
import React, { Component } from "react";

function Createbuttons(props) {
  const elements = [];
  var y = props.name;
  console.log(y);
  var x;
  for (x = 0; x < props.name; x++) {
    elements.push(
      <div>
        <button>HELLO</button>
      </div>
    );
  }

  console.log({ elements });
  const boating = (
    <ul>
      {elements.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );

  return boating;
}

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

  render() {
    var { flag, count, arry } = this.state;

    const training = (
      <div>
        {flag} {count} {arry}
      </div>
    );

    return (
      <div>
        {training}

        <button onClick={() => this.learning()}>
          This is only the beginning {count}
        </button>
        <button onClick={() => this.reset()}>RESET</button>

        <Createbuttons name={count} id="bots" class="fancy" />
      </div>
    );
  }
}

export default App;
