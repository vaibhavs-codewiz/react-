//bg change project
import { useState } from "react";

function App() {
  //since we need to propagate change on ui.
  let [color, setColor] = useState("orange");
  

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-col gap-y-2 bg-slate-200">
        <div className="fixed flex flex-col gap-y-2 bg-slate-100 mx-8 my-5 rounded-xl">
          <button className="px-8 my-8 px-2 mx-4 font-semibold font-serif bg-slate-200 rounded-xl border-none shadow-2xl py-3 text-slate-700" onClick = {() => setColor("white")}>white</button>
          <button className="px-8 my-8 px-2 mx-4 font-semibold font-serif bg-slate-400 rounded-xl border-none shadow-2xl py-3" onClick = {() => setColor("violet")}>violet</button>
          <button className="px-8 my-8 px-2 mx-4 font-semibold font-serif bg-slate-700 rounded-xl border-none shadow-2xl py-3 text-slate-900" onClick={ () => setColor("magenta") }>magenta</button>
          <button className="px-8 my-8 px-2 mx-4 font-semibold font-serif bg-slate-900 rounded-xl border-none shadow-2xl py-3 text-slate-400" onClick={ () => setColor("black") }>black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
