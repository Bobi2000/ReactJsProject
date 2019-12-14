import React from 'react';
import './Header.css';
import Sort from './Sort.jsx';

function Header({ children, sortedBy }) {

    return <div className="apollo-header">
        <h2>
            <a href="/">
                <span className="text">{children}</span>
            </a>
            <hr />
            <div className="controls">
                <div className="sorting">
                    <Sort sortedBy={sortedBy} />
                </div>
            </div>
        </h2>
    </div>;
}

export default Header;