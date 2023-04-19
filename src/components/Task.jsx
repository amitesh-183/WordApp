import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div>
      <div className="flex justify-between border mx-96 my-4 px-4">
        <div className="py-4">
          <p className=" font-semibold">{title}</p>
          <span className=" text-gray-500">{description}</span>
        </div>
        <div className="flex content-center bg-red-500 my-4 px-4 rounded transition-all duration-100 ease-linear hover:shadow-md hover:shadow-red-900">
          <button onClick={() => deleteTask(index)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
