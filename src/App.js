import React from 'react'
import TodoForm from './Components/TodoForm'
import Todo from './Components/Todo'

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
          
            todo={todo}
            
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}


export default App;
