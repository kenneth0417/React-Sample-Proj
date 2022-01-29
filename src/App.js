import "./App.css";
import React, { useState } from "react";
import data from "./data/data.json";
import HandCarry from "./components/HandCarry";
import CheckedBaggage from "./components/CheckedBaggage";
import Header from "./components/Header";

function App() {
  const [carryValue, setCarryValue] = useState(0);

  const [baggageValue, setBaggageValue] = useState(0);

  const [baggageBoolean, setBaggageBoolean] = useState([false, false]);

  const handleChange = (weight) => {
    !carryValue ? setCarryValue(weight) : setCarryValue(0);
  };

  const baggageChange = (weight, pos) => {
    const parsed = parseInt(weight);

    const update = baggageBoolean.map((val, idx) => (idx === pos ? !val : val));

    setBaggageBoolean(update);

    const total = update.reduce((sum, current, index) => {
      if (current === true) {
        return sum + parsed;
      }
      return sum;
    }, 0);

    setBaggageValue(total + " kg");
  };

  return (
    <div className="app">
      <Header carryValue={carryValue} baggageValue={baggageValue} />

      <HandCarry data={data} handleChange={handleChange} />

      <CheckedBaggage data={data} baggageChange={baggageChange} />
    </div>
  );
}

export default App;
