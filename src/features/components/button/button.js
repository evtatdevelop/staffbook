import React from "react";
import styles from './button.module.scss';

export const Button = props => {
  const {clickHandler, label, color, fontSize} = props

  const styleBtn = color ? `${styles.button} ${styles[color]}` : `${styles.button}`;
  const size = fontSize ? {fontSize: `${fontSize}px`} : {};

  return (
    <div className={styleBtn}>
      <button type="button" onClick={clickHandler} style={size}>{label}</button>
    </div>
  )
}
