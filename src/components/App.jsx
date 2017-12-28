import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Header from './Header';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Route exact path="/" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;