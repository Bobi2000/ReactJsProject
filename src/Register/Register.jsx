import React from 'react';
import * as yup from 'yup';

import '../Login/Login.css';
import withForm from '../shared/hocs/withForm.jsx';
import userService from '../services/user-service';


class Register extends React.Component {

  usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
  rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');

  submitHandler = () => {
    // this.props.runValidations()
    //   .then(formData => console.log(formData));
    const errors = this.props.getFormErrorState();
    if (!!errors) { return; }
    const data = this.props.getFormState();
    userService.register(data).then(() => {
      this.props.history.push('/login');
    });
  };

  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');
    const rePasswordError = this.getFirstControlError('rePassword');

    return <div className="content">
      <div className="row columns">
        <div className="column main">
          <div className="discussions disscussion-list box main">

            <form className="custom" >
              <label className="title-field">Username</label>
              <input type="text" name="title" required="required" maxLength="100" className="title title-field box submit" onChange={this.usernameOnChangeHandler}></input>
              {usernameError && <div className="error">{usernameError}</div>}

              <label className="title-field">Password</label>
              <input type="password" name="title" required="required" maxLength="100" className="title title-field box submit" onChange={this.passwordOnChangeHandler}></input>
              {passwordError && <div className="error">{passwordError}</div>}

              <label className="title-field">Repeat Password</label>
              <input type="password" name="title" required="required" maxLength="100" className="title title-field box submit" onChange={this.rePasswordOnChangeHandler}></input>
              {rePasswordError && <div className="error">{rePasswordError}</div>}

              <button type="button" className="button" value="Submit" data-bind="click: submit" onClick={this.submitHandler}>
                <div className="loading-indicator">
                  <span className="fist"></span>
                  <span className="halo spinning"></span>
                </div>
                <span className="submitMsg">Register</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>;
  }
}

const initialFormState = {
  username: '',
  password: '',
  rePassword: ''
};

const schema = yup.object({
  username: yup.string('Username shoud be a string')
    .required('Username is required')
    .min(4, 'Username should be more than 4 chars'),

  password: yup.string('Password must be a string')
    .required('Password is required')
    .min(6, 'Password must be more than 6 chars'),

  rePassword: yup.string('Password must be a string')
});

export default withForm(Register, initialFormState, schema)
