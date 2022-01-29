import React from "react";

const Header = ({ carryValue, baggageValue }) => {
  return (
    <div className="header">
      <p>You have selected</p>
      <p>
        {carryValue} Hand Carry, {baggageValue} Checked Baggage
      </p>
    </div>
  );
};

export default Header;
