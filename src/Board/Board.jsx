import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Post from './Post/Post.jsx';
import postService from '../services/post-service';
import { withRouter } from "react-router";

class Board extends React.Component {
    state = {
        posts: null
    };
    textInput = null;

    componentDidMount() {
        const sort = window.location.href.split('/').splice(-1)[0];
        
        if (sort == null) {
            postService.load(null, 5, null).then(posts => {
                this.setState({ posts });
            });
        }
        else {
            postService.load(sort).then(posts => {
                this.setState({ posts });
            });
        }

        
    }

    render() {
        const { posts } = this.state;

        console.log( {posts} );

        if (posts == null) {
            return <div className="content">
                <div className="row columns">
                    <div className="column main">
                        <div className="discussions disscussion-list box main">
                            <table>
                                <tbody>
                                    <Post votes="---" username="---" time="---" tag="---" comments="---" views="---">---</Post>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>;
        }

        return <div className="content">
            <div className="row columns">
                <div className="column main">
                    <div className="discussions disscussion-list box main">
                        <table>
                            <tbody>
                                {posts.map((post) =>
                                    <Post key={post._id} _id={post._id} votes={post.vote} username={post.author.username} img={post.link} time="--" tag={post.tag} comments="--" views={post.views} description={post.description}>{post.title}</Post>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>;
    }
}

Board.propTypes = {
    limit: PropTypes.number
}

export default withRouter(Board);

