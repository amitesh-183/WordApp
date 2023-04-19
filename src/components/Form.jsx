import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <form
        action="/"
        className="flex flex-col justify-center py-28 px-96 gap-3"
      >
        <h2 className=" text-xl font-semibold uppercase">Optimize Your Text</h2>
        <input
          type="text"
          placeholder="Enter here..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className=" border outline-none py-2 px-4 rounded-lg"
        />
        <div className=" flex gap-2">
          <button
            onClick={(e) => {
              let boldText = text;
              setText(boldText);

              e.preventDefault();
            }}
            className=" bg-red-600 px-4 rounded-xl hover:bg-red-400"
          >
            Bold
          </button>
          <button
            onClick={(e) => {
              let upperText = text.toUpperCase();
              setText(upperText);

              e.preventDefault();
            }}
            className=" bg-red-600 px-4 rounded-xl hover:bg-red-400"
          >
            UpperCase
          </button>
          <button
            onClick={(e) => {
              let lowerText = text.toLowerCase();
              setText(lowerText);

              e.preventDefault();
            }}
            className=" bg-red-600 px-4 rounded-xl hover:bg-red-400"
          >
            LowerCase
          </button>
          <button
            onClick={(e) => {
              setText("");
              e.preventDefault();
            }}
            className=" bg-red-600 px-4 rounded-xl hover:bg-red-400"
          >
            Clear
          </button>
        </div>
        <div>
          <h3>Text Summary</h3>
          <p>
            {text.split(" ").length} words, {text.length} characters
          </p>
        </div>
        <div>
          <h3>Preview</h3>
          <p className="border py-3 px-6">{text}</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
