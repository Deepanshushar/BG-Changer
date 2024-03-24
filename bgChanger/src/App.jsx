import { useState } from "react";
// import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center flex-wrap inset-x-0 bottom-12 h-16 fixed">
        <div className=" text-2xl flex justify-center flex-wrap bg-white rounded-full px-3 py-2 gap-4 ">
          <button
            onClick={() => setColor("red")}
            className="rounded-full px-3 py-2"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="rounded-full px-3 py-2"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="rounded-full px-3 py-2"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("orange")}
            className="rounded-full px-3 py-2"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("pink")}
            className="rounded-full px-3 py-2"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
