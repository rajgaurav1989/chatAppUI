import React from 'react';
import { Switch, BrowserRouter as Router, Route ,Link } from 'react-router-dom';
import InitialView from "./initialView";

class AdminLogin extends React.Component {
    render() {
        const styles = {
            containerStyle: {
                marginTop :"300px",
                marginLeft :"500px"
            }
        };
        const { containerStyle } = styles;
        return (
            <div style={containerStyle}>
                <input type="text" placeholder="Username" /><br /> <br />
                <input type="text" placeholder="Password" /><br />  <br />
                <Link to="/adminSetUp"><button>Submit</button></Link>
            </div>
        );
    }
}

export default AdminLogin;