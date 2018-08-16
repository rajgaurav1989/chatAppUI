import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import InitialView from "./initialView";
import AdminLogin from "./adminLogin" ;
import AdminPage from "./adminPage" ;
import ChatWindow from  "./chatWindow"

class Home extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={InitialView} />
                        <Route exact path="/admin" component={AdminLogin} />
                        <Route exact path="/adminSetUp" component={AdminPage} />
                        <Route exact path="/chat" component={ChatWindow} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Home;