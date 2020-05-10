import React from 'react';
import HomePage from "./Homepage";
import Projects from "./Projects";
import {Switch,Route} from 'react-router-dom';

const Main = () =>
 (
    <Switch>
        <Route exact path = "/" component = {HomePage} />
        <Route path = "/projects" component = {Projects}/>
    </Switch>
 ) 
export default Main; 