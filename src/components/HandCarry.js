import React from "react";

const HandCarry = ({ data, handleChange }) => {
  return (
    <div className="hand-carry">
      <p className="title">Hand Carry</p>
      {data[0].baggageList.map((bag) => (
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
  );
};

export default HandCarry;
