import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
export default function Navbar() {
  return <div className={classes.navbar}>
      <button><Link to ='/'>Retrogaming</Link></button>
      <button><Link to ='/SpaceInvaders'>Space Invaders</Link></button>
      <button><Link to ='/Pacman'>Pac-man</Link></button>
      <button><Link to ='/Mario'>Mario</Link></button>
  </div>;
}
