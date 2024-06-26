import { useState } from "react";
import useCurrencyInfo from "./hook/useCurrencyInfo";
import InputBox from "../component/InputBox";

function App() {
  const [from, setFrom] = useState("usd");

  // let currencyInfo = useCurrencyInfo(from);
  // let option = Object.keys(currencyInfo);
  // console.log(option);

  return (
    <>
      <InputBox 
      />
    </>
  );
}

export default App;
