import React from 'react';
import "./scss/app.scss";
import AnnouncementCard from './components/announcement/index';
import AnnouncementForm from "./components/announcement/announcement"
import {Route, Switch, withRouter,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={AnnouncementCard}/>
            <Route exact path="/announcement-form" component={AnnouncementForm}/>

        </Switch>
    </div>
  );
}

export default withRouter (App);
