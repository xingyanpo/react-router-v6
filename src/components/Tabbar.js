import React from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to='/film' className={({isActive})=>isActive?'tabbar-active':''}>电影</NavLink>
        </li>
        <li>
          <NavLink to='/cinema' className={({isActive})=>isActive?'tabbar-active':''}>影院</NavLink>
        </li>
        <li>
          <NavLink to='/center' className={({isActive})=>isActive?'tabbar-active':''}>我的</NavLink>
        </li>
      </ul>
    </footer>
  )
}
