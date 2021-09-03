import React from 'react';
import './header.scss';
import {FiShoppingCart} from 'react-icons/fi';
import {BiUserCircle} from 'react-icons/bi';
export default function Header(){
return(
    <div className="header">
        <div className="logo-content">
          <img className="happay-icon" src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg" />
          <h2 className="logo-name">Happay</h2>
        </div>
        <div className="icon-container">
          <FiShoppingCart className="cart" />
          <BiUserCircle className="profile"/>
        </div>
    </div>
);
}