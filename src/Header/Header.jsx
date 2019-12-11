import React from 'react';
import './Header.css';

function Header({children, isBoard}) {

    return <div className="apollo-header">
        <h2>
            <a href="/">
            <span className="text">{children}</span>
            </a>
            <hr />
            <div className="controls">
                    <div className="sorting">
                    Sort by:
                    <a href="?sort_type=hot" className="active">Hot</a>
                    <a href="?sort_type=recent">New</a>
                    <a href="?sort_type=recently_replied">Recent</a>
                </div>
            </div>
        </h2>
        </div>;
}

export default Header; 