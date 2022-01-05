import React from 'react';
import { Route, Switch,BrowserRouter, Redirect} from "react-router-dom";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import About from './../src/Pages/About/About';
import Dashboard from './components/Dashboard';
import Dashboard_ from './components/Dashboard/Dashboard_';
import Left_sidebar from './components/Left_sidebar';
import CreatePost from './components/Post/CreatePost';


export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/landing" />
                <Route exact path="/landing" component={LandingPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/SignUpPage" component={SignUpPage}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Dashboard" component={Dashboard}/>
                <Route exact path="/Dashboard_" component={Dashboard_}/>
                <Route exact path="/Left_sidebar" component={Left_sidebar}/>
                <Route exact path="/CreatePost" component={CreatePost}/>
            </Switch>
        </BrowserRouter>        
    );


}
