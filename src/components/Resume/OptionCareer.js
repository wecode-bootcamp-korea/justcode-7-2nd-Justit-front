import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import css from './OptionCareer.module.scss';

export const OptionCareer = () => {
  const [item, setItems] = useState([]);
  useEffect(() => {
    fetch('/data/OptionCareer.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.content);
      });
  }, []);
  return (
    <Select
      // isMulti
      options={item}
      className={css.select}
      isClearable={true}
      isSearchable={true}
      isDisabled={false}
      isLoading={false}
      isRtl={false}
      closeMenuOnSelect={true}
    />
  );
};
export default OptionCareer;
