import React from 'react';
import HomePage from "./Homepage"
import {Switch,Route} from 'react-router-dom';

const Main = () =>
 (
    <Switch>
        <Route exact path = "/" component = {HomePage} />
    </Switch>
 ) 
export default Main; 