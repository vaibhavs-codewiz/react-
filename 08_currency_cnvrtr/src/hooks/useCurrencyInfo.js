//custom hook : useCurrencyInfo
import React, {useState,useEffect} from "react"

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(
        () => {
            let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
          fetch(url)
          .then((res)=>res.json())
          .then((res)=> setData(res[currency]))
          console.log(data);
        },[currency]
    )
    return data;
}
export default useCurrencyInfo;
//whenever currency got change function above (hook) executes, and api fetched for
//new currency, and return data for new currency and update made in ui.