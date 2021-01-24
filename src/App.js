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
        <button>HELLO </button>

        <button>GoodBye </button>
      </div>
    );
  }

  console.log({ elements });
  const boating = (
    <div>
      {elements.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
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

  flip() {
    this.setState({ flag: false });
  }
  flipO() {
    this.setState({ flag: true });
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

    const flaggingTrue = (
      <div>
        <button onClick={() => this.flip()}>Flag Flip is true</button>
      </div>
    );

    const flaggingFalse = (
      <div>
        <button onClick={() => this.flipO()}>Flag Flip is false</button>
      </div>
    );

    return (
      <div>
        {training}

        <button onClick={() => this.learning()}>
          This is only the beginning {count}
        </button>
        <button onClick={() => this.reset()}>RESET</button>
        {flag ? flaggingTrue : flaggingFalse}

        <Createbuttons
          name={count}
          id="bots"
          class="fancy"
          flag={flag}
          box={arry}
        />
      </div>
    );
  }
}

export default App;
