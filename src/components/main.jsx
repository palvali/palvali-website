import React, { Component } from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import Today from './today';
import Planner from './planner';
import Past from './past';
import Settings from './settings';

export default class Main extends Component {

    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/today" component={Today}/>
                    <Route path="/planner" component={Planner}/>
                    <Route path="/past" component={Past}/>
                    <Route path="/settings" component={Settings}/>
                    <Redirect exact from="/" to="planner" />
                </Switch>
            </div>
        )
    }
}