import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <p>Login</p>
      <button onClick={()=>{
        localStorage.setItem('token', 'hhh')
        navigate('/center')
      }}>登录</button>
    </div>
  )
}
