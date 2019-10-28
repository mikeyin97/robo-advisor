import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signin from './components/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={() => <App name={""}/>} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

