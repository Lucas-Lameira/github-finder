import React from 'react';
import {FaGithub} from 'react-icons/fa';

export default function Navbar () {
  return (
    <nav className="navbar bg-primary">
        
      <h1>  
        <FaGithub size={28} title="github logo"/>         
        Finder
      </h1>
    </nav>
  )
}