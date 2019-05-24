import React, { Component } from 'react';
import { UserLoginFetchData } from '../../Actions/actions';
import { connect } from 'react-redux';
import auth0 from 'auth0-js';


class HeaderBar extends Component {

    accessToken;
    idToken;
    expiresAt;
  
    auth0 = new auth0.WebAuth({
      domain: 'ashokreddypenamalli.auth0.com',
      clientID: '4hsR5-XRnqpz__5w1NjoIoJNRoHI4-lX',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });


    constructor(props) {
        super(props)
        this.state = {}


    }

    logout() {
          this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove user profile
    this.userProfile = null;

    // Clear token renewal
    clearTimeout(this.tokenRenewalTimeout);

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // this.auth0.logout({
    //   returnTo: window.location.origin
    // });
    this.auth0.logout();

      }
    

    render() {
        var TisAuthenticated = this.props.isAuthenticated

        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Contact</a>
                            </li>

                            {
                                TisAuthenticated&& (
                                    <li className="nav-item">
                                        <a className="nav-link"  onClick={this.logout.bind(this)}>logout</a>
                                    </li>

                                )}
                        </ul>
                    </div>
                </nav>

                {this.props.children}

                <div className="footer">
                    <p></p>
                </div>
            </div>
        )

    }




}

// export default Login;
function mapStateToProps(state, actions) {
    if (state.fetchLogin && state.fetchLogin.Status) {
        return { registerResponse: state.fetchLogin }


    }
    else {

        return {}


    }

    // console.log("User Login", state.fetchLogin)

}

export default connect(mapStateToProps)(HeaderBar);