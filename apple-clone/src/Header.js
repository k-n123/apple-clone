import React from 'react'
import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Header() {
  return (
    <div className='header'>
        <div className='header__logo'></div>
            <img className='header__logoImage' src ="https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png"/>
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

        <div className='header__optionSearch'>
            <SearchIcon className='header__icon'></SearchIcon>
        </div>

        <div className='header__optionBasket'>
            <ShoppingBagIcon className='header__icon'></ShoppingBagIcon>
        </div>
    </div>
  )
}

export default Header
