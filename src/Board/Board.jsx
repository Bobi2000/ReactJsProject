import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Post from './Post/Post.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Boards from '../Boards/Boards';
import postService from '../services/post-service';

class Board extends React.Component {
    state = {
        posts: null
    };
    textInput = null;

    componentDidMount() {
        postService.load(null, this.props.limit).then(posts => {
            this.setState({ posts });
        });
    }

    render() {
        const { posts } = this.state;

        if(posts == null)
        {
            return <div className="content"> 
                    <div className="row columns"> 
                        <div className="column main"> 
                            <div className="discussions disscussion-list box main">
                                <table>
                                    <tbody>
                                        <Post votes = "---" username="---" time = "---" tag="---" comments="---" views="---">---</Post>
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
                                <Post votes = "100" username="shefasf" time = "1" tag="champion" comments="1" views="5">EVENTS</Post>)}
                                <Post votes = "---" username="---" time = "---" tag="---" comments="---" views="---">---</Post>
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

export default Board;

/*
function Board() {
    return <div className="content"> 
    <div className="row columns"> 
            <div className="column main"> 
                <div className="discussions disscussion-list box main">
                    <table>
                        <tbody>
                            <Post votes = "100" username="shefasf" time = "1" tag="champion" comments="1" views="5">EVENTS</Post>
                            <Post votes = "102" username="murzel4o" time= "1" tag="champion" comments="2" views="100">Clash</Post>
                            <Post votes = "105" username="renekton" time = "1" tag="champion" comments="3" views="333">Shhit game</Post>
                            <Post votes = "110" username="yasou" time = "1" tag="champion" comments="3" views="666">whataever</Post>
                            <Post votes = "130" username="nasus" time = "1" tag="champion" comments="3" views="333">asking</Post>
                            <Post votes = "170" username="whatever" time = "1" tag="champion" comments="3" views="333">map</Post>
                            <Post votes = "190" username="lul" time = "1" tag="champion" comments="3" views="333">sm</Post>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>;
}


export default Board; 
*/