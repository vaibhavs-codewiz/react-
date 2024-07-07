import React from "react";

function Navbar() {
  let url =
    "https://i.pinimg.com/564x/a7/93/b6/a793b62b175b8124e90eb5743ccf1905.jpg";
  return (
    <div>
      <img className="w-full h-1/2 object-contain" src={url} alt="main" />
      <nav className="h-28 absolute inset-0 flex bg-black bg-opacity-50">
        <div className="w-1/3 flex justify-items-center px-6 mt-6 text-4xl">
          logo
        </div>
        <ul className="flex justify-items-center gap-8 px-5 mt-5 text-3xl text-black ">
          <li>men</li>
          <li>t-shirt</li>
          <li>about</li>
          <li>collections</li>
        </ul>
        <div className="flex justify-items-center ml-56 gap-14 px-5 mt-5 text-3xl">
          <div className="bg-neutral-800 text-white px-5 rounded-xl h-12">login</div>
          <div className="bg-neutral-800 text-white px-5 rounded-xl h-12">cart</div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
