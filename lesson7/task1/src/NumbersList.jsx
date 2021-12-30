import React from 'react';

const NumbersList = ({ numbers }) => {
  const numberItem = numbers.map((el) => <li key={el}>{el}</li>);
  return <ul>{numberItem}</ul>;
};
export default NumbersList;
