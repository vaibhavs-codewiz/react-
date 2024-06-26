import { useState, useCallback, useEffect, useRef } from "react";

// function App() {
//   let [length, setLength] = useState(8);
//   let [password, setPassword] = useState("");
//   let [charAllowed, setCharAllowed] = useState(false);
//   let [numberAllowed, setNumberAllowed] = useState(false);

//   //use call back hook used for optimize(memoize)
//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (charAllowed) {
//       str += "!#$%&()*+,-./:<=>[]^_`?@";
//     }
//     if (numberAllowed) {
//       str += "0123456789";
//     }
//     for (let i = 1; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, charAllowed, numberAllowed, setPassword]);

//   //use effect used for executing function whenever change in dependencies.
//   useEffect(() => {
//     passwordGenerator();
//   }, [length, charAllowed, numberAllowed, setPassword]);
//   //in use effect we used the dependency setpassword method because of use password it
//   //will execute method everytime as password changes everytime.
//   let passwordRef = useRef("ijnnvrwf");
//   let copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 99);
//     window.navigator.clipboard.writeText(password);
//     console.log("copied");
//   }, [password]);

//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className="text-white text-center my-3">Password generator</h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//           type="text"
//           value={password}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Password"
//           readOnly
//           ref={passwordRef}
//         />
//         <button
//           onClick={copyPasswordToClipboard}
//           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
//         >
//           copy
//         </button>
//       </div>
//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className="cursor-pointer"
//             onChange={(e) => {
//               setLength(e.target.value);
//             }}
//           />
//           <label>Length: {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={numberAllowed}
//             id="numberInput"
//             onChange={() => {
//               setNumberAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={charAllowed}
//             id="characterInput"
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  let [length, setLength] = useState(10);
  let [password, setPassword] = useState("iycfe");
  let [charAllowed, setCharAllowed] = useState(false);
  let [numberAllowed, setnumberAllowed] = useState(false);

  let passwordGenerator = useCallback(
    ()=>{
           let pass = "";
           let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
           if(numberAllowed) {str += "0123456789"};
           if(charAllowed) {str += "@#$%^&*!~`:.<,?/*+-"};
           for(let i = 0; i<length ; i++)
            {
              let char = Math.floor(Math.random()*str.length + 1);
              pass += str.charAt(char);
            }
            setPassword(pass);
    },[length,charAllowed,numberAllowed,setPassword]
  )
  useEffect(() => {passwordGenerator()}, [
    length,
    charAllowed,
    numberAllowed,
    setPassword,
  ]);
  let passwordref = useRef("ubc");
  let copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className="flex justify-center h-full">
      <div className="w-1/4 h-96 bg-slate-400 my-10 rounded-lg grid grid-cols-1 place-items-center">
        <h1 className="">password generator</h1>
       <div>
        <input type="text" placeholder="password..." readOnly value={password} ref={passwordref}
        className="rounded opacity-30 px-4"/>
        <button onClick={copyPasswordToClipboard} className="rounded bg-red-500 px-3 text-white">copy</button>
       </div>
       <div>
        <input type="range" min={1} max={50} className="cursor-pointer px-4" value={length}
        onChange={(val)=>setLength(val.target.value)} />
        <label className="px-3">length: {length}</label>
       </div>
       <div>
        <input type="checkbox" id="characterInput" defaultChecked={charAllowed}
        onChange={()=>{
          setCharAllowed(prev => !prev)
        }} />
        <label htmlFor="characterInput">character</label>
       </div>
       <div>
        <input type="checkbox" id="numberInput" defaultChecked={numberAllowed}
        onChange={()=>{
          setnumberAllowed(prev => !prev)
        }} />
        <label htmlFor="numberInput">number</label>
       </div>
      </div>
    </div>
  );
}
export default App;
