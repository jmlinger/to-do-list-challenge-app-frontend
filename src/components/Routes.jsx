import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ToDoList from '../pages/ToDoList';


function allRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/todolist" element={ <ToDoList /> } />
      {/* <Route path="*" element={ <Error /> } /> */}
    </Routes>
  );
}

export default allRoutes;
