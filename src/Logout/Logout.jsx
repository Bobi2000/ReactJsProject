import React from 'react';
import userService from '../services/user-service.js';

function Logout( { logout, history } )  {
    logout(history);
    return null;
}

export default Logout;