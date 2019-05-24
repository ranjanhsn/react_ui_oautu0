import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Prices from "./Pages/Prices"

const auth = new Auth();

// import createHistory from 'history/createBrowserHistory';
//  const history = createHistory();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          {/* <Route path="/home"  component={Prices} /> */}
          <Route path="/home" render={(props) => <Prices auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>

);
export default Routes;


