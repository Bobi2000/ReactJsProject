import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from '../Navigation/Navigation.jsx';
import Board from '../Board/Board.jsx';
import Boards from '../Boards/Boards.jsx';
import CreatePost from '../CreatePost/CreatePost.jsx';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Logout from '../Logout/Logout.jsx';
import Discussion from '../Discussion/Discussion.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import userService from '../services/user-service.js';
import Store from '../Store/Store.jsx';

function render(title, Cmp, otherProps) {
  return function (props) {
    return <div><Header>{title}</Header><Cmp {...props} {...otherProps}></Cmp></div>
  }
}

function parseCookie() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends React.Component {

  constructor(props) {
    super(props);

    const cookies = parseCookie();
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged };
  }

  logout = (history) => {
    userService.logout().then(() => {

      this.setState({ isLogged: false });
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    return userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
      return null;
    });
  }

  render() {
    const { isLogged } = this.state;
    return (
      <BrowserRouter>
        <Store>
        <Navigation isLogged={isLogged} />
          <div className="App">
            <div className="content">

              <Switch>

                <Route path="/" exact>
                  <Header sortedBy="new">Boards</Header>
                  <Board limit={10} />
                </Route>

                <Route path="/champions" exact><Header sortedBy="new">Boards</Header><Board limit={10} /></Route>
                <Route path="/creation-concepts" exact><Header sortedBy="new">Boards</Header><Board limit={10} /></Route>
                <Route path="/off-topic" exact><Header sortedBy="new">Boards</Header><Board limit={10} /></Route>
                <Route path="/streams-videos" exact><Header sortedBy="new">Boards</Header><Board limit={10} /></Route>

                {isLogged && <Route path="/create-post" render={render('Start A New Discussion', CreatePost, { isLogged })} />}

                <Route exact path="/login" render={render('Login', Login, { isLogged, login: this.login })} />
                <Route exact path="/register" render={render('Register', Register, { isLogged })} />
                <Route exact path="/logout" render={render('Register', Logout, { isLogged, logout: this.logout })} />

                <Route path="/discussion/:id">
                  <Header>Discussion</Header>
                  <Discussion />
                </Route>


                <Route path="*">
                  <Header>404</Header>
                </Route>

              </Switch>

              <Boards isLogged={isLogged} />

            </div>
          </div>
          
        </Store>
      </BrowserRouter>
    );
  }
}

export default App;


/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


<Header isBoard={false}>Create A New User</Header>
<Register />
</Route>

<Header isBoard={false}>Login</Header>
<Login />
</Route>


{isLogged && <Route path="/create-post">
                <Header>Start a New Discussion</Header>
                <CreatePost />
              </Route>}

              */