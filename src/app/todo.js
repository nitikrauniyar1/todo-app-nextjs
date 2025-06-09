"use client";

import { useState } from "react";

const ToDo = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    if (!text.trim()) return;
    setValue([...value, text]);
    setText("");
  };

  const removeTask = (indexToRemove) => {
    setValue(value.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide   ">
        ToDo lists
      </h1>
      <div className="parent flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-48">
        <div className="Todo bg-white w-full max-w-lg p-8 rounded-3xl shadow-2xl">
          <div className="input-box flex items-center gap-4 mb-8">
            
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Type something..."
              className="flex-grow px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 transition"
            />
            <button
              onClick={addTask}
              className="btn-add text-3xl bg-purple-600 text-white rounded-xl px-6 py-3 shadow-md hover:bg-purple-700 active:scale-95 transition-transform cursor-pointer"
              aria-label="Add task"
            >
              ➕
            </button>
          </div>
          <div className="listing">
            <ul className="space-y-4">
              {value.length == 0 ? (
                <p>No tasks yet. Start typing above! ✨</p>
              ) : (
                value.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-purple-50 rounded-xl px-5 py-3 shadow-sm"
                  >
                    <span className="text-gray-800 font-medium truncate">
                      {item}
                    </span>
                    <button
                      onClick={() => removeTask(index)}
                      className="btn-remove text-red-600 text-2xl hover:text-red-800 transition cursor-pointer"
                      aria-label="Remove task"
                    >
                      ❌
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
