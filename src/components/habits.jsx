import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
// Habits라는 컴포넌트 생성 후 , 기존에 있던 Habit이라는 컴포넌트를 자식 컴포넌트로 만들었다.
// 자식 컴포넌트에서 부모컴포넌트에 접근 할 시에는 props 로 호출한다.
//

const Habits = (props) => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    props.onDecrement(habit);
  };

  const handleDelete = (habit) => {
    props.onDelete(habit);
  };

  const handleAdd = (name) => {
    props.onAdd(name);
  };

  return (
    <div className="habitContainer">
      <HabitAddForm onAdd={handleAdd} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={props.onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
