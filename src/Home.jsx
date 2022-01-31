import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Errors from './Error';
import Menu from './Menu';
import User from './User';

const Home=()=>{
    const Name=()=>{
        return <h2>Hello, I am Name Component</h2>
    }
    return(
        <>
            <h3>React Router DOM</h3>
            <Menu/>
            <Switch>
                <Route exact path="/" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route path="/contact/name" component={Name}></Route>
                <Route path='/user/:fname/:lname' component={User}></Route>
                <Route component={Errors}></Route>
            </Switch>
        </>
    );
};

export default Home;