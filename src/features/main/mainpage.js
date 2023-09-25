import React, { useEffect, useState } from "react";
import styles from './mainpage.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { user, loading } from '../user/userSlice';
import ExpirationScreen from "../expirationScreen";
import { LangButton } from "../components/langButton/langButton";
import { UploadFile } from "../components/uploadFile/uplodeFile";
import { uploadFile } from "./mainpageSliceAPI";
import { data, setData, upData } from "./mainpageSlice";
import { Input } from "../components/input/Input";
import { LoadableList } from "../components/loadableList/loadableList";

export const MainPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(user);
  const load = useSelector(loading);
  const postData = useSelector(data);
  // const rowFrom = useSelector(row_from);
  // const rowNum = useSelector(row_num);
  // const partCntr = useSelector(counter);

  const [file, setFile] = useState();

  useEffect(() => {
    // if ( userData.api_key && rowNum ) dispatch(getStaffbook({api_key: userData.api_key, row_from: rowFrom, row_num: rowNum})) 
    setTimeout(() => { onExpired(true); document.body.style.overflow = "hidden"}, 12*60*60*1000)
  }, [dispatch]);
  const [expired, onExpired] = useState(false);


  const uplode = async () => {
    if ( file ) await uploadFile({'file': file, 'api_key': userData.api_key});
    console.log('Загружено');
    dispatch(upData( {...postData, 'api_key': userData.api_key}))
  }

  // const getNextPart = async() => {
  //   dispatch(setCounter());
  //   if ( partCntr * rowNum + 1 <= rowFrom )
  //     dispatch(getStaffbook({api_key: userData.api_key, row_from: rowFrom, row_num: rowNum}));
  // }

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
              <Input 
                inputHandler = { val => dispatch(setData(val)) }
                inputClear = { () => {} }
                placeholder = 'Input'
                val = ''
              />
              <button type="button" className={styles.btn} onClick={uplode}>Upload</button>     

            </form>  

            <LoadableList/>     
          </>
        : null
      }

      { expired ? <ExpirationScreen/> : null }
    </section>
  )
}

