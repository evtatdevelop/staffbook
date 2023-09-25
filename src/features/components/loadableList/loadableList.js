import React, { useEffect, useRef } from "react";
import styles from './loadableList.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { user } from '../../user/userSlice';
import { getStaffbook, row_from , setCounter, row_num, counter, staffbook, loading } from "../../main/mainpageSlice";
import { StaffItem } from "./staffItem/staffItem";

export const LoadableList = () => {
  const ref = useRef(null)
  const dispatch = useDispatch();
  const userData = useSelector(user);
  const rowFrom = useSelector(row_from);
  const rowNum = useSelector(row_num);
  const partCntr = useSelector(counter);
  const staff = useSelector(staffbook);
  const load = useSelector(loading);

  useEffect(() => {
    if ( userData.api_key && rowNum ) dispatch(getStaffbook({api_key: userData.api_key, row_from: rowFrom, row_num: rowNum})) 
  }, [dispatch, rowFrom, rowNum, userData]);

  const getNextPart = async() => {
    dispatch(setCounter());
    if ( partCntr * rowNum + 1 <= rowFrom )
      dispatch(getStaffbook({api_key: userData.api_key, row_from: rowFrom, row_num: rowNum}));
  }

  const scrollLoad = () => {
    if ( ref.current.scrollHeight - ref.current.scrollTop < 400 * partCntr && !load ) {
      dispatch(setCounter());
      if ( partCntr * rowNum + 1 <= rowFrom )
        dispatch(getStaffbook({api_key: userData.api_key, row_from: rowFrom, row_num: rowNum}));
    }  
  }

  return (
    <>
      <ul className={styles.listHeader}>
        <div>Last name</div>
        <div>First name</div>
        <div>Middle name</div>
        <div>Email</div>
      </ul>
      <ul className={styles.staffList}
        onScroll={scrollLoad}
        ref={ref}
      >
        {staff.map(item => <li key={item.app12_id}><StaffItem item={item}/></li>)}
        <li>  <button type="button" className={styles.btn} onClick={getNextPart}>addStaff</button> </li>
      </ul>    
    </>

     
  )
}

