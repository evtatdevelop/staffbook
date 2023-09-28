import React, {useState, useRef, forwardRef, useImperativeHandle } from "react";
import styles from './input.module.scss';

// export const Input = props => {
const Input = (props, ref) => {
  const insideref = useRef(null)
  const {inputHandler, inputClear, placeholder, val} = props
  const [value, setValue] = useState(val ? val : "")
  const [timerId, setTimerId] = useState(null)
  const onInput = val => {
    setValue(val);
    clearTimeout(timerId);
    const timer = setTimeout(() => inputHandler(val), 500);
    setTimerId(timer);
  }
  const clearInput = () => {
    clearTimeout(timerId);
    setValue(val);
    inputClear();
    insideref.current.focus();
  }

  const styleClnBtn = value ? `${styles.clearBtn} ${styles.showClnBtn}` : `${styles.clearBtn}`

  useImperativeHandle(ref, () => ({ clearInput }));

  return (
    <div className={styles.input}>
      <input type="text" className={styles.htmInput}
        value={value}
        onInput={e => onInput(e.target.value)}
        placeholder = {placeholder}
        ref={insideref}
      />
      {<button type="button" className={styleClnBtn}
          onClick={() => clearInput()}
          aria-label="Clear"
          >&times;</button>
      }
    </div>
  )
}

export default forwardRef(Input);