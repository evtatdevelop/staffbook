import React, { useEffect, useState } from "react";
import styles from './mainpage.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { user, loading } from '../user/userSlice';
import ExpirationScreen from "../expirationScreen";
import { LangButton } from "../components/langButton/langButton";
import { UploadFile } from "../components/uploadFile/uplodeFile";
import { uploadFile } from "./mainpageSliceAPI";
// import { mainpage, getMainpage } from "./mainpageSlice";

export const MainPage = () => {
  const userData = useSelector(user);
  const load = useSelector(loading);
  const dispatch = useDispatch();

  const [file, setFile] = useState();

  useEffect(() => {
    // if ( userData.api_key ) dispatch(getMainpage(userData.api_key)) 
    setTimeout(() => { onExpired(true); document.body.style.overflow = "hidden"}, 12*60*60*1000)
  }, [dispatch, userData]);
  const [expired, onExpired] = useState(false);


  const uplode = () => {
    // console.log(file);
    if ( file ) uploadFile({'file': file, 'api_key': 'TatarenkoEG'})
    .then(() => {console.log('Загружено'); })
    .catch(() => { console.log('Ошибка');})
  }


  return (
    <section className={styles.mainpage} >
      { !load
        ? <>
            <header className={styles.header}>
              <h1>{userData.lang === 'EN' ? 'Main Page' : 'Glavnaya stranica'}</h1>
              <LangButton/>        
            </header>
            <form  className={styles.uplodeSection}>
              <UploadFile getFile={file=>setFile(file)}/>
              <button type="button" 
                className={styles.btn}
                onClick={uplode}
              >Upload</button>              
            </form>       
          </>
        : null
      }

      { expired ? <ExpirationScreen/> : null }
    </section>
  )
}

