import React, { useState, useRef } from "react";
import styles from './dataCollector.module.scss';
import { useDispatch } from "react-redux";
// import { user } from '../user/userSlice';
import Input from '../components/input/Input';
import Select from '../components/select/select';
import Checkbox from "../components/checkbox/checkbox";
import { Button } from "../components/button/button";
import { addData } from "../main/mainpageSlice";

export const DataCollector = () => {
  const dispatch = useDispatch();
  // const userData = useSelector(user);

  const [dataType, setDataType] = useState(null);
  const [data, setData] = useState(null);
  const [defaultData, setDefaultData] = useState(false);

  const addDataSet = () => {
    const dataSet = { dataType, data, defaultData, }
    dispatch(addData(dataSet));
    
    clearDataCollector();
  }

  const clearDataCollector = () => {
    if ( inputRef.current ) inputRef.current.clearInput();
    if ( checkboxRef.current ) checkboxRef.current.clear();
    if ( selectRef.current ) selectRef.current.clearInput();
    setDataType(null);
    setData(null);
    setDefaultData(false);    
  }

  const inputRef = useRef(null);
  const checkboxRef = useRef(null);
  const selectRef = useRef(null);

  return (
    <section className={styles.dataCollector} >
      <Select
        selectHandler = { val => setDataType(val) }
        selectClear  = { () => {} }
        placeholder = 'Dta type'
        selectList = {[{'id':'phone', 'name':'phone'}, {'id':'cellphone', 'name':'cellphone'}, {'id':'e-mail', 'name':'e-mail'}, ]}
        val = ''
        name='dataType'
        ref={selectRef}
      />
      <Input 
        inputHandler = { val => setData(val) }
        inputClear = { () => {} }
        placeholder = 'Input'
        val = ''
        ref={inputRef} 
      />

      <Checkbox
        clickHandler = { val =>setDefaultData(val) } 
        label = 'Use as default'
        name = 'default'
        checked = {false}
        ref={checkboxRef}
      />

      <Button
        clickHandler = { addDataSet } 
        label = 'Save field'
        color = 'green'
        fontSize = '18'
      />

    </section>
  )
}

