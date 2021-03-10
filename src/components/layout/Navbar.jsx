import React from 'react';
import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
    <nav className="navbar bg-primary">
        
      <h1>  
        <FaGithub size={28} title="github logo"/>         
        Finder
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}