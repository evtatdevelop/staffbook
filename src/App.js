import React, { useEffect } from 'react';
import './App.scss';
import { MainPage } from './features/main/mainpage';
import { useSelector, useDispatch } from "react-redux";
import { loading, langLoading, getRemote } from './features/user/userSlice';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './features/loader/loader';
import { testMode, root } from './config';

function App() {
  const load = useSelector(loading);
  const langLoad = useSelector(langLoading);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getRemote()) }, [dispatch, ]);

  const _pathBase = testMode ? '' : `/${root}`

  return (
    <div className="App">
      <Routes>
        <Route path={`${_pathBase}/`} exact element={<MainPage/>}/> 
      </Routes>
      { load || langLoad ? <Loader/> : null }
    </div>
  );
}

export default App;
