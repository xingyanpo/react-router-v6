import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Film from '../views/Film';
import Cinema from '../views/Cinema';
import Center from '../views/Center';
import Redirect from '../components/Redirect';
import NotFound from '../views/NotFound';

export default function MRouter() {
  return (
    <Routes>
      <Route path='/film' element={<Film />}/>
      <Route path='/cinema' element={<Cinema />}/>
      <Route path='/center' element={<Center />}/>

       {/* <Route path="*" element={<Navigate to="/films"/>}/>  */}
      <Route path='/' element={<Redirect to={'/film'}/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
