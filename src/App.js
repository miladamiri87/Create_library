import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="container_all_library">

      <div className="Container_nav">
        <h1> Milad Library</h1>


        <nav className="nav_items">
          <Link to="/books">Books</Link>
          <Link to="/contact_us">Contact Us</Link>
          <Link to="/about_us">About Us</Link>
        </nav>

      </div>
      <div className="container_content">
      <Outlet/>

      </div>
    </div>
  )
}
