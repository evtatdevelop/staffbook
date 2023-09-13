import React, { useEffect, useState } from "react";
import styles from './mainpage.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { mainpage, getMainpage } from "./mainpageSlice";
import { user } from '../user/userSlice';

import ExpirationScreen from "../expirationScreen";

export const PrimaryPage = () => {
  const userData = useSelector(user);
  const dispatch = useDispatch();

  useEffect(() => {
    if ( userData.api_key ) dispatch(getMainpage(userData.api_key)) 
    setTimeout(() => { onExpired(true); document.body.style.overflow = "hidden"}, 12*60*60*1000)
  }, [dispatch, userData]);
  const [expired, onExpired] = useState(false);

  return (
    <section className={styles.mainpage} >
      <h1>Main Page</h1>
      
      { expired ? <ExpirationScreen/> : null }
    </section>
  )
}

