import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon/';
import Regiter from './pages/Register/';
import Profile from './pages/Profile/';
import NewIncident from './pages/NewIncident/';

export default function Routs(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Regiter} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                
            </Switch>
        </BrowserRouter>
    );
}