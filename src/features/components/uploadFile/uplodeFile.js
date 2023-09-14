import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from './uploadFile.module.scss';
import { user } from '../../user/userSlice';
import dictionary from '../../../dictionary.json';

export const UploadFile = () => {
  const lang = useSelector(user)['lang'];

  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();

  const fileReader = new FileReader();
  fileReader.onloadend = () => setFileURL(fileReader.result);

  const stopDefault = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  const chechNoFiles = files => files && files.length;

  const handlerChange = e => {
    e.preventDefault();
    if ( chechNoFiles(e.target.files) ) {
      const file = e.target.files[0];
      setFile(file);
      fileReader.readAsDataURL(file);      
    }
  }

  const handlerDrop = e => {
    stopDefault(e);
    if ( chechNoFiles(e.dataTransfer.files) ) {
      const file = e.dataTransfer.files[0];
      setFile(file);
      fileReader.readAsDataURL(file);
    }
  }


  const uplodeHandler = () => {
    if ( file ) console.log(file);
  }
  

  return (
    <section className={styles.uplodefile} >
      <label htmlFor="file"
        className={styles.label}
        onDrop={handlerDrop}
        onDragEnter={stopDefault}
        onDragOver={stopDefault}        
      >{ file 
          ? <img src={fileURL}
              alt="test"
              className={styles.img}
            /> 
          : dictionary.select_file[lang]
      }</label>
      <input type="file"
        className={styles.file}
        id='file'
        onChange={handlerChange}
      />

      <button type="button" 
        className={styles.btn}
        onClick={ e => uplodeHandler(e) }
      >Upload</button>

    </section>
  )
}

