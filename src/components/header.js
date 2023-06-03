import '../style/header.css';
import Cart from './Cart';
import Admin from './Admin';
import { Routes,Route} from "react-router-dom";
import React from 'react';

// Các thành phần React và mã khác ở đây


class Header extends React.Component {
  render() {
    return (
        <div className='header'>
            <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEooBG7X8Bl24Ft54onNGrCrehluKSdeP-A&usqp=CAU'></img>
            <div className='menu'>
              <ul >
                <li>
                    <a href="/">TRANG CHỦ</a>
                </li>
                <li>
                    <a href="/Cart"></a>
                </li>
                <li>
                  <a href="/Admin">ADMIN</a>
                </li>
              </ul>
            </div>
        </div>
        
    );
  }
}

export default Header;
