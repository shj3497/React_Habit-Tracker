import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar'

class App extends Component {
  state = {
    habits: [
      {id:1, name: 'Reading', count: 0},
      {id:2, name: 'Running', count: 0},
      {id:3, name: 'Coding', count: 0}
    ],
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement : ${habit.name}`);
    // const habits = [...this.state.habits];
    // console.log(habits); ...의 의미는 그대로 복사해온다라는 뜻
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        // console.log({...habit})
        // console.log({...habit, count:habit.count + 1})
        return {...habit, count:habit.count + 1};
      }
      return item;
    });

    this.setState({
      habits: habits
    });
  }

  handleDecrement = (habit) => {
    console.log(`handleDecrement : ${habit.name}`)
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count--;
    // if(habits[index].count < 0){
    //   habits[index].count=0;
    // }
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        let count = habit.count -1;
        if(count <0){
          count = 0;
        }
        // console.log({...habit, count:count});
        return {...habit, count:count}
      }
      return item;
    })
    this.setState({
      habits:habits
    })
  }

  handleDelete = (habit) => {
    console.log(`handleDelete : ${habit.name}`)
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({
      habits:habits
    })
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name:name, count:0}]
    // 기존에 있던 배열 ...this.state.habits, (추가할것) {}
    this.setState({
      habits:habits
    })

  }

  handleReset = () => {
    // 이것은 오브젝트안의 데이터를 바꿔서 반환하는것이므로 오브젝트에는 변경이 없다.
    // const habits = this.state.habits.map(habit => {
    //   habit.count = 0;
    //   return habit;
    // })

    // 이것은 새로운 오브젝트를 생성후 데이터값을 바꿔서 오브젝트로 반환하는 것
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count:0}
      }
      return habit;
    })
    this.setState({
      habits:habits
    })
  }
  
  render() {
    // console.log('App')
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
