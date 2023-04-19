import React, { useEffect, useState } from "react";
import Task from "./Task";

const Todo = () => {
  const initialArr = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  const [task, setTask] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    setTask([
      ...task,
      {
        title,
        description,
      },
    ]);
    // localStorage.setItem("task",JSON.stringify(task))
    e.preventDefault();
  };
  const deleteTask = (index) => {
    const filteredArr = task.filter((val, i) => {
      return i !== index;
    });
    setTask(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div>
      <div className="flex flex-col justify-center py-24">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-2 mx-96 text-center content-center"
        >
          <h3 className="font-bold text-2xl">Daily Goals</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Tasks here..."
            className="border py-2 px-4 rounded-lg outline-none"
          />
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="description here..."
            className="border rounded-lg py-2 px-4 outline-none"
          />
          <button className=" rounded-lg py-2 px-4 bg-green-400 duration-100 ease-in-out hover:bg-green-500 hover:shadow-md hover:shadow-green-900">
            Add
          </button>
        </form>
        {task.map((item, index) => (
          <Task
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
