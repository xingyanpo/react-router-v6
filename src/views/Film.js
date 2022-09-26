import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Film() {
  return (
    <>
      <div>Film</div>
      <Outlet></Outlet>
    </>
  )
}
