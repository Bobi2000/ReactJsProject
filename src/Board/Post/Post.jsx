import React from 'react';
import './Post.css';

function Post({ children, votes, username, time, tag, comments, views }) {
    return <tr className="discussion-list-item row">
        <td className="voting small">
            <div className="apollo voting">
                <ul className="voting">
                    <li></li>
                    <li className="vote-total green"> {votes} </li>
                    <li></li>
                    <li className="votes">votes</li>
                </ul>
            </div>
        </td>
        <td className="title" colSpan="2">
            <div className="discussion-title opaque">
                <a className="title-link" href="$">
                    <span className="title-link" title="...">
                        {children}
                    </span>                   
                </a>
            </div>
            <div className="discussion-footer byline opaque">
                by {username} &nbsp;

                in
                &nbsp;
                {tag}

                <span className="timeago"> &nbsp; {time} hours ago</span>
            </div>
        </td>
        <td className="commented">

        </td>
        <td className="num-comments byline">
                <span className="number opaque">{comments}</span>
                <span className="opaque">comments</span>
        </td>
        <td className="view-counts byline">
            <span class="number opaque" data-short-number="4026">{views}</span>
            <span class="opaque">Views</span>
        </td>
    </tr>;
}

export default Post;