import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Filter by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={{
        backgroundColor: '#fff ',
        outline: '1px solid rgba(33, 33, 33, 0.2)',
        borderRadius: '4px',
        border: '1px solid rgba(33, 33, 33, 0.2)',
      }}
    />
  </label>
);

export default Filter;
