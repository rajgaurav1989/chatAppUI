import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

class UserLogin extends React.Component {
    render() {
        const styles = {
            containerStyle: {
                marginTop :"300px",
                marginLeft :"500px"
            }
        };
        const { containerStyle } = styles;
        return (
            <div style={containerStyle} >
                <input type="text" placeholder="Enter Alias Name" /><br /><br />
                <Link to="/chat"><button>Submit</button></Link>
            </div>
        );
    }
}


export default UserLogin