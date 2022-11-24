import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import css from './OptionEducation.module.scss';

export const OptionEducation = () => {
  const [item, setItems] = useState([]);
  useEffect(() => {
    fetch('/data/OptionEducation.json')
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
export default OptionEducation;
