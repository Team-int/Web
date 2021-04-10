import React from 'react';
import '../css/Header.css'

class Header extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
          <header className="header">
            <nav>
                <ul className="nav">
                    <li className="nav-item"><a href="">ㄷ</a></li>
                    <li className="nav-item"><a href="">ㄷ</a></li>
                    <li className="nav-item"><a href="">ㄷ</a></li>
                    <li className="nav-item"><a href="">ㅈ</a></li>
                </ul>
            </nav>
          </header>
        );
      }
}

export default Header;