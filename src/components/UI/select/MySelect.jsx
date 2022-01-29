import React from 'react';

export const MySelect = ({ options, defaultOption, onChange, value }) => {
  return (
    <select onChange={(event) => onChange(event.target.value)} value={value}>
      <option value="" disabled>
        {defaultOption}
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};
