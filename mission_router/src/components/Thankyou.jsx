import React from "react";
import { useParams} from "react-router-dom";

function Thankyou() {
  const {userid} = useParams();
  return <div className="h-96 bg-green-300 text-center text-5xl">Thankyou: {userid}</div>;
}

export default Thankyou;
