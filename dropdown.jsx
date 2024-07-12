/* eslint-disable react/prop-types */
import React from 'react';

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
}) => {

  return (
    <div>
      <div>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        ></select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;