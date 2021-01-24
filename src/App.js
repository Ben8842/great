import "./App.css";
import React, { Component } from "react";

function hellofunction() {
  console.log("hello");
}

function goodbyefunction() {
  console.log("good bye");
}

function Morebuttons(props) {
  const elements = [];
  var y = props.name * 2;
  var x;
  for (x = 0; x < y; x++) {
    elements.push(
      <span>
        <button>boom {props.name}</button>
      </span>
    );
  }
  const booming = (
    <span>
      {elements.map((value, index) => {
        return <span key={index}>{value}</span>;
      })}
    </span>
  );

  return booming;
}

function Createbuttons(props) {
  const elements = [];
  var y = props.name;
  console.log(y);
  var x;
  for (x = 0; x < props.name; x++) {
    elements.push(
      <span>
        <button onClick={() => hellofunction()}>HELLO </button>

        <button onClick={() => goodbyefunction()}>GoodBye </button>
      </span>
    );
  }

  console.log({ elements });
  const boating = (
    <span>
      {elements.map((value, index) => {
        return <span key={index}>{value}</span>;
      })}
    </span>
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
        <Morebuttons
          name={count}
          id="tots"
          class="regular"
          flag={flag}
          box={arry}
        />
      </div>
    );
  }
}

export default App;
