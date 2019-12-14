import React from 'react';
import './Login.css';

import withForm from '../shared/hocs/withForm.jsx';

class Login extends React.Component {

    state = { error: null };
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        this.props.login(this.props.history, data).catch(error => {
            this.setState({ error });
        });
    }

    render() {
        const { error } = this.state;
        return <div className="content">
            <div className="row columns">
                <div className="column main">
                    <div className="discussions disscussion-list box main">

                        <form id="submission-form" className="custom" method="post">
                            <label className="title-field">Username</label>
                            <input type="text" name="title" required="required" maxLength="100" className="title title-field box submit" onChange={this.usernameOnChangeHandler}></input>

                            <label className="title-field">Password</label>
                            <input type="password" name="title" required="required" maxLength="100" className="title title-field box submit" onChange={this.passwordOnChangeHandler}></input>

                            {error && error}

                            <button type="button" className="button" value="Submit" onClick={this.submitHandler}>
                                <div className="loading-indicator">
                                    <span className="fist"></span>
                                    <span className="halo spinning"></span>
                                </div>
                                <span className="submitMsg">Login</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    };
}

export default withForm(Login, { username: '', password: '' });