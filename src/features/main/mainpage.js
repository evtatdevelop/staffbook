import React, { useEffect, useState } from "react";
import styles from './mainpage.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { user } from '../user/userSlice';
import ExpirationScreen from "../expirationScreen";
import { LangButton } from "../components/langButton/langButton";
import { UplodeFile } from "../components/uplodeFile/uplodeFile";
// import { mainpage, getMainpage } from "./mainpageSlice";

export const MainPage = () => {
  const userData = useSelector(user);
  const dispatch = useDispatch();

  useEffect(() => {
    // if ( userData.api_key ) dispatch(getMainpage(userData.api_key)) 
    setTimeout(() => { onExpired(true); document.body.style.overflow = "hidden"}, 12*60*60*1000)
  }, [dispatch, userData]);
  const [expired, onExpired] = useState(false);

  return (
    <section className={styles.mainpage} >
      <header className={styles.header}>
        <h1>{userData.lang === 'EN' ? 'Main Page' : 'Glavnaya stranica'}</h1>
        <LangButton/>        
      </header>

      <form  className={styles.uplodeSection}>
        <UplodeFile/>
      </form>
        

      { expired ? <ExpirationScreen/> : null }
    </section>
  )
}

