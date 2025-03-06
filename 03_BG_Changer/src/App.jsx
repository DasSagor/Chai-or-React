import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bg-slate-200 bottom-12 inset-x-0 px-4 mx-4 rounded-xl">
        <div className="flex flex-wrap h-10 gap-0.5 sm:gap-4 xl:gap-6 py-1">
          <button
            className="bg-red-500 px-4 rounded-2xl text-white cursor-pointer"
            onClick={() => setColor("Red")}
          >
            Red
          </button>
          <button
            className="bg-green-700 px-4 rounded-2xl text-white cursor-pointer"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-blue-700 px-4 rounded-2xl text-white cursor-pointer"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 rounded-2xl text-white cursor-pointer"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="bg-white px-4 rounded-2xl font-semibold cursor-pointer"
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="bg-gray-500 px-4 rounded-2xl text-white cursor-pointer"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="bg-black px-4 rounded-2xl text-white cursor-pointer"
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
