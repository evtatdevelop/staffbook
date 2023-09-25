import React from "react";
import styles from './staffItem.module.scss';
// import { useSelector, useDispatch } from "react-redux";
// import { user } from '../../user/userSlice';
// import { getStaffbook, row_from , setCounter, row_num, counter, staffbook } from "../../main/mainpageSlice";

export const StaffItem = props => {
  const { app12_id, company_group, domain, email, first_name, lang_code, last_name, login, middle_name, phone1, position_name } = props.item
  // const dispatch = useDispatch();
  // const userData = useSelector(user);
  // const rowFrom = useSelector(row_from);
  // const rowNum = useSelector(row_num);
  // const partCntr = useSelector(counter);
  // const staff = useSelector(staffbook);

  return (
    <div className={styles.staffItem} key={app12_id}>
      <div>{last_name}</div>
      <div>{first_name}</div>
      <div>{middle_name}</div>
      <div>{`${email}`}</div>
    </div>
  )
}

