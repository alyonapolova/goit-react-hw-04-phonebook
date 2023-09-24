import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './Form.styled';
const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <FilterInput type="text" onChange={onChange} value={value}></FilterInput>
  </label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
