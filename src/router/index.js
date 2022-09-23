import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Film from '../views/Film';
import Cinema from '../views/Cinema';
import Center from '../views/Center';

export default function MRouter() {
  return (
    <Routes>
      <Route index path='/film' elemant={<Film />}></Route>
      <Route path='/cinema' element={<Cinema />}></Route>
      <Route path='/center' element={<Center />}></Route>
    </Routes>
  )
}
