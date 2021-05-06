import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm'
// Habits라는 컴포넌트 생성 후 , 기존에 있던 Habit이라는 컴포넌트를 자식 컴포넌트로 만들었다.
// 자식 컴포넌트에서 부모컴포넌트에 접근 할 시에는 props 로 호출한다.
// 

export default class Habits extends Component {
  // state = {
  //   habits: [
  //     {id:1, name: 'Reading', count: 0},
  //     {id:2, name: 'Running', count: 0},
  //     {id:3, name: 'Coding', count: 0}
  //   ],
  // };

  handleIncrement = (habit) => {
    // console.log(`handleIncrement : ${habit.name}`);
    // const habits = [...this.state.habits];
    // console.log(habits); ...의 의미는 그대로 복사해온다라는 뜻
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({
    //   habits: habits
    // });

    this.props.onIncrement(habit);

  }

  handleDecrement = (habit) => {
    // console.log(`handleDecrement : ${habit.name}`)
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count--;
    // if(habits[index].count < 0){
    //   habits[index].count=0;
    // }
    // this.setState({
    //   habits:habits
    // })
    this.props.onDecrement(habit);
  }

  handleDelete = (habit) => {
    // console.log(`handleDelete : ${habit.name}`)
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    // this.setState({
    //   habits:habits
    // })
    this.props.onDelete(habit);
  }

  handleAdd = (name) => {
    this.props.onAdd(name);
  }

  render() {
    // console.log('Habits')
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {
            // app.js에서 habits를 전달해 줬으니 배열로 담겨져 있다.
            this.props.habits.map(habit => (
              <Habit 
                key={habit.id} 
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete} 
              />
              )
            )
          }
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </div>
    )
  }
}
