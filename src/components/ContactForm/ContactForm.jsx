import React from 'react';
import PropTypes from 'prop-types';

export const ContactForm = ({ name, nubmer, onChange }) => {
  return (
    <form action="">
      <label htmlFor="">
        <input type="text" value={name} name="name" onChange={onChange} />
      </label>
      <label htmlFor="">
        <input type="text" value={nubmer} name="number" onChange={onChange} />
      </label>
      <button type="submit"></button>
    </form>
  );
};
