import React, { useState } from "react";
import styles from './checkbox.module.scss';

export const Checkbox = props => {
  const { clickHandler, label, name, checked } = props;
  const [value, setValue] = useState(checked)
  const [timerId, setTimerId] = useState(null)

  const changeHandler = () => {
    setValue( !value );
    clearTimeout(timerId);
    const timer = setTimeout(() => clickHandler(!value), 500);
    setTimerId(timer);
  }

  const styleChbx = value ? `${styles.checkbox} ${styles.checked}` : `${styles.checkbox}`

  return (
    <div className={styleChbx}>

      <input type="checkbox" id={name}
        defaultChecked={value}
        onChange={changeHandler}
      />
      <label htmlFor={name}>{label}</label>

    </div>
  )
}
