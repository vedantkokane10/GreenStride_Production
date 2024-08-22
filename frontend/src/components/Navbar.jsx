import React from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';
import { useContext } from 'react';
const Navbar = () => {
  const {isAuthenticated} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <div className='Logo'>
            <h3>GreenStride</h3>
        </div>

        <div className='NavItems'>
          {isAuthenticated ?
            (<>
            <Link to="/addActivity" className="nav-link">Add Activity</Link>
            <Link to="/getActivity" className="nav-link">Track Records</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/suggestion" className="nav-link">Get Suggestions</Link>
            <Link to="/Leaderboard" className="nav-link">Leaderboard</Link>
            </>)
           :
            (<>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
            </>
            )
          }
          </div>
    </div>
  )
}

export default Navbar;
