import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
const navbar = () => {
  return (
    <div className="navbar flex">
        <div class="left-nav">
            <h1>PaperAi</h1>
        </div>
        <div class="right-nav flex">
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
            <button class="signup">Sign Up</button>
            <button class='login'>Login</button>
        </div>
    </div>
  )
}

export default navbar