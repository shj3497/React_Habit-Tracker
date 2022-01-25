import React, { useState, useCallback } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handleIncrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (habit.id === item.id) {
          let count = habit.count - 1;
          if (count < 0) {
            count = 0;
          }
          return { ...habit, count: count };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((habit) => {
    setHabits((habits) => {
      const index = habits.indexOf(habit);
      return [
        ...habits.slice(0, index),
        ...habits.slice(index + 1, habits.length + 1),
      ];
    });
  }, []);

  const handleAdd = useCallback((name) => {
    setHabits((habits) => [
      ...habits,
      { id: Date.now(), name: name, count: 0 },
    ]);
  }, []);

  const handleReset = useCallback(() => {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    );
  }, []);

  return (
    <div>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
