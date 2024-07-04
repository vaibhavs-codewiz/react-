import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
export function Github() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    let url = "https://api.github.com/users/vaibhavs-codewiz";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
//let data = useLoaderData();

  return (
    <div className="h-96 bg-green-300 text-center text-5xl ">
      Github : {data.following_url}
      <div className="grid place-content-center  w-full h-3/4 ">
        <img
          className="h-40 w-40 rounded-xl p-4  "
          src={data.avatar_url}
          alt="github image"
        />
    </div>
    </div>
  );
}



// export const githubInfoLoader = async ()=>{
//   const response = await fetch("https://api.github.com/users/vaibhavs-codewiz");
//   return response.json();
// }
