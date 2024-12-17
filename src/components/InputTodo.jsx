import { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (description == "") {
      return;
    }
    try {
      const body = { description };
      const response = await fetch(
        "https://todobackend-puce.vercel.app/todos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-[400px]">
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          className="bg-[#09433B] rounded-xl focus:border-0 py-2 px-4 text-lg focus:outline-none focus:ring-0 text-white w-[80%]"
          placeholder="Enter your todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-[#FFA500] text-white px-4 py-2 rounded-xl ml-2  text-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
