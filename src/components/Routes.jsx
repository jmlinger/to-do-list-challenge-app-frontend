import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';

function allRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Main /> } />
      {/* <Route path='/login' element={ <Login /> } /> */}
      {/* <Route path='/registration' element={ <Registration />} /> */}
    </Routes>
  );
}

export default allRoutes;
