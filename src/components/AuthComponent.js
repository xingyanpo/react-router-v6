import React from 'react'
import Redirect from './Redirect'

export default function AuthComponent({children}) {
  const isLogin = localStorage.getItem('token')
  return isLogin ?children:<Redirect to={'/login'}></Redirect>
}
