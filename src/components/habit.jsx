import React, { PureComponent } from 'react';

// Habit 컴포넌트의 부모 컴포넌트는 Habits이다.
// 부모컴포넌트의 데이터 호출시에는 props를 활용하고, 자신의 데이터를 호출할 때는 state를 사용한다.

class Habit extends PureComponent {

  componentDidMount() {
    console.log(`habit : ${this.props.habit.name} mounted`)
  }
  
  componentWillUnmount() {
    console.log(`habit : ${this.props.habit.name} will Unmounted`)
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    // console.log('Habit')
    // console.log(this.props.habit);
    // const habitName = this.props.habit.name;
    const {name, count} = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>

        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>

        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>

        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;