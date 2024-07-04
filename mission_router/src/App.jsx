import React from "react";
import "./index.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Thankyou from "./components/Thankyou";
import Booklist from "./components/Booklist";
import Notfound from "./components/Notfound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Github,githubInfoLoader} from "./components/Github";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />}> 
        <Route path="/Notfound" element={<Notfound />}/>
        </Route>
        <Route
          path="/Booklist"
          element={<Booklist />}
        />
        <Route path="/Thankyou/:userid" element={<Thankyou />} />
        <Route  path="/Github" element={<Github />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
