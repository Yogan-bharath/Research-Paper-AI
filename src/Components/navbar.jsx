import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
const navbar = () => {
  return (
    <div className="navbar flex">
        <div className="left-nav">
            <h1>PaperAi</h1>
        </div>
        <div className="right-nav flex">
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/UploadPage"}>
                Upload Paper
            </Link>
            <Link to={"/CategoriesPage"}>
                Categories
            </Link>
        </div>
        <div className='auth flex'>
            <button className="signup">Sign Up</button>
            <button className='login'>Login</button>
        </div>
    </div>
  )
}

export default navbar