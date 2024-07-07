import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  let [username, setusername] = useState(null);
  let [password, setpassword] = useState("");

  const {setUser} = useContext(UserContext);
  let handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password});
  };
  return (
    <div className="w-full h-4/5 flex justify-center">
      <div className="font-mono flex flex-col justify-items-center border border-slate-700 h-1/2 bg-slate-400 rounded-b-3xl shadow-2xl shadow-slate-900">
        <h2 className="bg-slate-700 text-white text-3xl w-80 py-3">
          Login
        </h2>
        <div className="flex flex-col justify-items-center w-40">
          <input
            className="shadow-inner shadow-slate-600 border border-slate-700 border-solid rounded-xl mx-20 mt-10 px-3 py-2 w-40 text-2xl"
            type="text"
            placeholder="username..."
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <input
            className="shadow-inner shadow-slate-600 border border-slate-700 border-solid rounded-xl mx-20 mt-10 px-3 py-2 w-40 text-2xl"
            type="text"
            placeholder="password..."
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            className="shadow-inner shadow-slate-800 bg-slate-500 hover:bg-slate-700 text-white rounded mx-20 mt-10 px-3 py-2 w-40 text-2xl"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
