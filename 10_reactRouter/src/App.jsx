import "./App.css";
import { Link,Routes,Route } from "react-router-dom"
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";


function App() {
  

  return (
    <>
      <nav>
        <ul className="flex justify-items-center gap-8 p-7 py-7 px-5 bg-red-500 text-3xl text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Header">Header</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
