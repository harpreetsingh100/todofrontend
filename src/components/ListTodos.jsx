import { useEffect, useState } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleToggleComplete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/todos/${id}/toggle`, {
        method: "PUT",
      });
      const updatedTodo = await response.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.todo_id === updatedTodo.todo_id ? updatedTodo : todo
        )
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.todo_id}
          className="bg-[#1C5149] w-[60%] m-auto h-16 rounded-xl px-4 py-2 mt-5 flex justify-between items-center">
          <div
            className={`${
              todo.completed
                ? "line-through text-white text-lg"
                : "text-white text-lg"
            }`}
            style={{ outline: "blue", border: "none", caretColor: "white" }}>
            {todo.description}
          </div>
          <div className="flex gap-3">
            <span
              className="bg-[#CD4646] py-2 px-4 rounded-lg text-white cursor-pointer"
              onClick={() => handleToggleComplete(todo.todo_id)}>
              Complete
            </span>
            <span
              className="bg-[#FFA500] py-2 px-4 rounded-lg text-white cursor-pointer"
              onClick={() => deleteTodo(todo.todo_id)}>
              Delete
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
