import React, { useState, useRef, useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { links, social } from './NavData';
import './NavBar.css'
import Glassmorphism from '../../../UI/glassmorphism/glassmorphism';
import Rccg_logo from '../../../UI/RCCG_Logo/Rccg_logo';
// import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <Glassmorphism >
      <nav  >      
        <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='logo' alt='logo' /> */}
          <Rccg_logo  className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className='links-container' ref={linksContainerRef}>

          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li >
                    <NavLink  to={url}>{text}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <NavLink to={url}>{icon}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      </nav>

    </Glassmorphism>
  );
};

export default Navbar;