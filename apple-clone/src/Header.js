import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className='header__logo'></div>

        <div className='header__option'>
            <span className='header__optionText'>Store</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>Mac</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>iPad</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>iPhone</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>Watch</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>Vision</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>Airpods</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>TV & Home</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>Entertainment</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>Accessories</span>
        </div>
        <div className='header__option'>
            <span className='header__optionText'>Support</span>
        </div>

        <div className='header__optionSearch'></div>

        <div className='header__optionBasket'></div>
    </div>
  )
}

export default Header
