import React from "react";

const CheckedBaggage = ({ data, baggageChange }) => {
  return (
    <div className="checked-baggage">
      <p className="title">Checked Baggage</p>
      {data[1].baggageList.map((bag, idx) => (
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
  );
};

export default CheckedBaggage;
