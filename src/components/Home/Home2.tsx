import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Home2() {
  return (
    <div>
      <NavLink to="Home3">点击</NavLink>
      <Outlet/>
    </div>
  )
}
