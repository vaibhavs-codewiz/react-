import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="mt-20 rounded-3xl shadow-2xl shadow-slate-900 bg-slate-700 text-white text-2xl px-4 py-3">
        please Login !
      </div>
    );
  else
    return (
      <h2 className="mt-20 rounded-3xl shadow-2xl shadow-slate-900 bg-slate-700 text-white text-2xl px-4 py-3">
        welcome {user.username}
      </h2>
    );
}

export default Profile;
