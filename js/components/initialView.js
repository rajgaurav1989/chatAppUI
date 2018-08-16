import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch,Redirect} from 'react-router-dom';
import UserLogin from './userLogin'

class InitialView extends React.Component {
    constructor(props){
        super();
        
        this.doAdminLogin = this.doAdminLogin.bind(this);
    }
    
    doAdminLogin(){
        console.log("raju do the login");
        return (
            <Redirect to='/admin' />
        );
    }
    
    render() {
        
        return (
            <div>
                <Link to="/admin"><button>Admin Login</button></Link>
                <UserLogin />
            </div>
        );
    }
}


export default InitialView