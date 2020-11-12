import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom'
import history from '../../routes/history'
import Pages from '../../routes/pages'

function App() {
  return (
    <Router history={history}>
      <Route component={Pages} />
    </Router>
  );
}

export default App;
