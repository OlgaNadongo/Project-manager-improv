import React from 'react'
import {NavLink} from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="banner">
            {/* <div className="navbar">
                

                <h2 className="logo">SWEEZY</h2>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Bedroom</a></li>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
            </div>
            <div className="content">
                  <h1>MANAGE YOUR PROJECTS</h1>
                  <p>Manage your projects in an easy, efficient and most accessible way </p>
            <div>
                <button type="button"> <span></span>WATCH MORE</button>
                <button type="button"><span></span>SUBSCRIBE</button>
            </div>
            </div> */}

            <div className='navbar'>
                <h2 className="logo">SWEEZY</h2>

                <ul>
                    {/* <NavLink className='links' to="/projectlist">Projects</NavLink> */}
                    <NavLink className='links' to="/login">Log in</NavLink>
                    <NavLink className='links' to="/signup">Get started</NavLink>
                </ul>
            </div>
             
            <div className="content">
                  <h1>MANAGE YOUR PROJECTS</h1>
                  <p>Manage your projects in an easy, efficient and most accessible way </p>
            </div>
            <div>
                <button type="button"> <span></span>WATCH MORE</button>
                <button type="button"><span></span>SUBSCRIBE</button>
            </div>

        </div>
  )
}

export default Homepage