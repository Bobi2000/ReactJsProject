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
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import userService from '../services/user-service.js';

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
    userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
      return null;
  });
  }

  render() {
    const { isLogged } = this.state;
    return (
      <BrowserRouter>
   
        <div className="App">
        <div className="content">
        
          <Switch>

            <Route path="/" exact>
              <Header isBoard={true}>Boards</Header>
              <Board limit={3} />
            </Route>

            <Route path="/create-post">
              <Header>Start a New Discussion</Header>
              <CreatePost />
            </Route>

            <Route path="/login" render={render('Login', Login, { isLogged, login: this.login})} />
            <Route path="/register" render={render('Register', Register, {isLogged})}/>
            <Route path="/logout" render={render('Register', Logout, {isLogged, logout: this.logout})}/>
             
            <Route path="*">
              <Header isBoard={false}>404</Header>
            </Route>

        </Switch>

        <Boards isLogged={isLogged} />
        
      </div>
    </div>
    <Navigation  isLogged={isLogged}/>
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
*/