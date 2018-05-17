import React from 'react';
import './header.css';
import logo from '../../logo.svg';

export default function Header(){
  return (
    <header>
      <div className='header__logo__container'>
        <img src={logo} alt='logo' className='header__logo'/>
      </div>
    </header>
  )
}