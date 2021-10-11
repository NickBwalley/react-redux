import React from "react";
const useState = React.useState;

export class ClassBasedCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onButtonIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onButtonDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>ClassBasedCount: {this.state.count}</h1>
        <button onClick={this.onButtonIncrease}>Increase!</button>
        <button onClick={this.onButtonDecrease}>Decrease!</button>
      </div>
    );
  }
}

export const FunctionBasedCount = () => {
  const [count, setCount] = useState(0);

  const onButtonIncrease = () => {
    setCount(count + 1);
  };

  const onButtonDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>FunctionBasedCount: {count}</h1>
      <button onClick={onButtonIncrease}>Increase!</button>
      <button onClick={onButtonDecrease}>Decrease!</button>
    </div>
  );
};
