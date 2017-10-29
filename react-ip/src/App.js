import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Panel from './admin/index'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path ="/" render={()=><Panel/>} />  
          </Switch>
        </Router>
    );
  }
}

export default App;
