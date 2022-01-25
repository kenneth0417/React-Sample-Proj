import "./App.css";
import React, { useState } from "react";

function App() {
  const DATA = [
    {
      baggageType: "handCarry",
      baggageTypeColor: "secondaryLight",
      baggageHeadingColor: "secondaryBlue",
      showToolTip: true,
      toolTipColor: "secondaryBlue",
      baggageList: [
        {
          title: [
            { weight: "10 kg", dimension: "40 x 20 x 25 cm" },
            { weight: "20 kg", dimension: "80 x 25 x 30 cm" },
          ],
          currency: "MYR",
          amount: 194.2,
          id: "hand_bag_0_0",
          isPreSelected: false,
        },
      ],
    },
    {
      baggageType: "checkedBaggage",
      baggageTypeColor: "blueActive",
      baggageHeadingColor: "blueMedium",
      showToolTip: false,
      toolTipColor: "secondaryBlue",
      baggageList: [
        {
          title: [{ weight: "20 kg", dimension: "119 x 81 x 119 cm" }],
          currency: "MYR",
          amount: 426.8,
          id: "hold_bag_0_0",
          isPreSelected: false,
        },
        {
          title: [
            { weight: "20 kg", dimension: "119 x 81 x 119 cm" },
            { weight: "30 kg", dimension: "120 x 90 x 100 cm" },
          ],
          currency: "MYR",
          amount: 853.6,
          id: "hold_bag_0_1",
          isPreSelected: false,
        },
      ],
    },
  ];

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
      <div className="header">
        <p>You have selected</p>
        <p>
          {carryValue} Hand Carry, {baggageValue} Checked Baggage
        </p>
      </div>
      <div className="hand-carry">
        <p className="title">Hand Carry</p>
        {DATA[0].baggageList.map((bag) => (
          <table>
            <input
              type="checkbox"
              defaultChecked={bag.isPreSelected}
              onChange={() => handleChange(bag.title.map((bg) => bg.weight)[0])}
            />
            <div className="row">
              {bag.title.map((bg, idx) => (
                <tr>
                  <td>{bg.weight} Hand Carry</td>
                  <td className="dimension">{bg.dimension}</td>
                </tr>
              ))}
            </div>
            <p>
              <span>{bag.currency}</span> {bag.amount}
            </p>
          </table>
        ))}
      </div>
      <div className="checked-baggage">
        <p className="title">Checked Baggage</p>
        {DATA[1].baggageList.map((bag, idx) => (
          <table>
            <input
              type="checkbox"
              defaultChecked={bag.isPreSelected}
              name="baggage"
              onChange={() =>
                baggageChange(bag.title.map((bg) => bg.weight)[0], idx)
              }
            />
            <div className="row">
              {bag.title.map((bg, idx) => (
                <tr key={idx}>
                  <td>{bg.weight} Checked Baggage</td>
                  <td className="dimension">{bg.dimension}</td>
                </tr>
              ))}
            </div>
            <p>
              <span>{bag.currency}</span> {bag.amount}
            </p>
          </table>
        ))}
      </div>
    </div>
  );
}

export default App;
