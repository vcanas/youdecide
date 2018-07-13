import React from "react";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Search from "./components/Search";
import Library from "./components/Library";

export const Controller = () => (
    <HashRouter>
        <div>
            <Switch>
                <Route path="/search" component={Search} />
                <Route path="/vids" component={Library} />
                <Redirect from="/" to="/search" />
            </Switch>
        </div>
    </HashRouter>

)