import React from 'react';
import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from '../../styles/components/Navbar.module.css';

export default function Navbar () {
  return (
    <div className={styles.genericDiv}>
      <nav className={styles.navbarContainer}>    

        <h1 className={styles.appName}>  
          <FaGithub size={30} title="github logo"/>         
          <p>Finder</p> 
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
    </div>
  )
}