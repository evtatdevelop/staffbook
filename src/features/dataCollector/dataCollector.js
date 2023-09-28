import React from "react";
import styles from './dataCollector.module.scss';
// import { useSelector, useDispatch } from "react-redux";
// import { user } from '../user/userSlice';
import Input from '../components/input';
import Select from '../components/select';
import { Checkbox } from "../components/checkbox/checkbox";
import { Button } from "../components/button/button";


// import {  } from "./mainpageSlice";


export const DataCollector = () => {
  // const dispatch = useDispatch();
  // const userData = useSelector(user);


  return (
    <section className={styles.dataCollector} >
      <Select
        selectHandler = { val => console.log(val) }
        selectClear  = { () => {} }
        placeholder = 'Dta type'
        selectList = {[{'id':'phone', 'name':'phone'}, {'id':'cellphone', 'name':'cellphone'}, {'id':'e-mail', 'name':'e-mail'}, ]}
        val = ''
        name='dataType'
      />
      <Input 
        inputHandler = { val => console.log(val) }
        inputClear = { () => {} }
        placeholder = 'Input'
        val = ''
      />

      <Checkbox
        clickHandler = { val => console.log(val)} 
        label = 'Use as default'
        name = 'default'
        checked = {false}
      />

      <Button
        clickHandler = { () => console.log("add field")} 
        label = 'Save field'
        color = 'green'
        fontSize = '18'
      />

    </section>
  )
}

