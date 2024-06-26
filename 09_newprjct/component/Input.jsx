import React from "react";

function Input() {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor="test" className="text-black/40 mb-2 inline-block">
          to
        </label>
        <input
          id="test"
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value="amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value="usd"
          id="currency"
          key="usd"
          // onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          // disabled={currencyDisable}
        >
          <option key="usd" value="usd">
            usd
          </option>
          <option key="xya" value="usd">
            xya
          </option>
          <option key="inr" value="usd">
            inr
          </option>
        </select>
      </div>
    </div>
  );
}

export default Input;
