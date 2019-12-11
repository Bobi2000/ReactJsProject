import React from 'react';
import '../Board/Board.css';

function Boards({ isLogged }) {
    return <div className="column side">
    <div className="new-discussion-box box">
        {!isLogged && <a href="/login" className="create-discussion-cta button"><span>Create a Discussion</span></a>}
        <a href="/create-post" className="create-discussion-cta button"><span>Create a Discussion</span></a>
    </div>
    <form className="box main search-form" method="get">
        <div className="search-icon">&nbsp;</div>
        <input type="text" placeholder="Search" name="query" id="query" required="required"></input>
        <input type="hidden" name="content_type" value="discussion"></input>
    </form>
    <div id="navigation-container" className="box main collapseable">
    <div className="toggle">
        <a href="/">Boards</a>
    </div>
    <div className="content">
        <div>
            <div id="markdown-nav" className="markdown-nav apollo markdown-content">
                <p>
                    <strong>Game</strong>
                    <br/>
                    <a href="#" className="safe">Champions</a>
                    <br/>
                    <a href="#" className="safe">Champions</a>
                    <br/>
                    <a href="#" className="safe">Champions</a>
                    <br/>
                    <a href="#" className="safe">Champions</a>
                </p>
            </div>
        </div>
    </div>
</div>
</div>
}


export default Boards;