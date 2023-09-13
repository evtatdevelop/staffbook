import React, { useState } from "react";
import styles from './uplodeFile.module.scss';
import { user } from '../../user/userSlice';
import { useSelector } from "react-redux";
import dictionary from '../../../dictionary.json';

export const UplodeFile = () => {
  const lang = useSelector(user)['lang'];

  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();

  const fileReader = new FileReader();
  fileReader.onloadend = () => setFileURL(fileReader.result);

  const handlerChange = e => {
    e.preventDefault();
    if ( e.target.files && e.target.files.length ) {
      const file = e.target.files[0]
      setFile(file);
      fileReader.readAsDataURL(file);      
    }
  }

  const handlerDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    if ( e.dataTransfer.files && e.dataTransfer.files.length ) {
      setFile(e.dataTransfer.files[0]);
      fileReader.readAsDataURL(e.dataTransfer.files[0]);
    }
  }

  const handlerDragEmpty = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  const uplodeHandler = () => {
    console.log(file);
  }  

  return (
    <section className={styles.uplodefile} >

      <label htmlFor="file"
        className={styles.label}
        onDrop={handlerDrop}
        onDragEnter={handlerDragEmpty}
        onDragOver={handlerDragEmpty}        
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
      >Uplode</button>

    </section>
  )
}

