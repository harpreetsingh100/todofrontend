import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-[#102623] w-full h-[30vh] flex justify-center items-center text-2xl flex-col">
        <h2 className="text-white text-3xl">Todo List</h2>
        <div className="mt-4 rounded-xl">
          <InputTodo />
        </div>
      </div>
      <div className="bg-[#C8DAD3] h-[70vh] py-2 overflow-auto">
        <ListTodos />
      </div>
    </div>
  );
}

export default App;
