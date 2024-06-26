import React, {useId} from "react";


function InputBox(
    {
        label,
        amount,
        onAmountChange,
        selectCurrency = "usd",
        onCurrencyChange,
        option = [],
    }
) {
    let newId = useId();

  return (
    <div className="w-full h-full bg-slate-700 rounded-lg">
      <div>
        <label htmlFor={newId}>{label}</label>
        <input type="text" placeholder="amount..." value={amount} onChange={onAmountChange}
        id={newId} className="rounded w-10 h-8" />
      </div>
      <div>
        <p>select currency</p>
        <select name="" id="">
          <option value=""></option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
