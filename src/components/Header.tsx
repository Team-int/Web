import React from 'react';
import '../css/Header.css'

class Header extends React.Component {
    render() {
        return (
          <header className="header">
            <nav>
                <ul className="nav">
                    <li className="logo">
                        <img src="" alt="" className="logo-img" />
                    </li>
                    <li className="nav-item"><a href="">소</a></li>
                    <li className="nav-item"><a href="">고</a></li>
                    <li className="nav-item"><a href="">기</a></li>
                </ul>
            </nav>
          </header>
        );
      }
}

export default Header;