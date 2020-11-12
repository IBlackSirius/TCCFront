import React from 'react'
import { Switch, Route, withRouter, BrowserRouter as Router } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import history from "./history";
import StoreProvider from '../components/Store/Provider'
import RoutesPrivate from '../routes/Private/Private'

interface IProps {

}

history.listen((location, action) => {
    window.scrollTo(0, 0)
})

const Pages = () => {
    return (
      <Router>
        <StoreProvider>
          <Switch>
            <Route path='/login' component={Login} />
            <RoutesPrivate path="/" exact={true} component={Home} />
          </Switch>
        </StoreProvider>
      </Router>   
    );
  };

  export default withRouter(Pages);