import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';
// import './App.css';
import HeaderBar from './Pages/HeaderBar';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    

    return (
      <HeaderBar>
        {!isAuthenticated() && (<div>
          <div className="container jumbotron-jum jumbotron vertical-cente">
            <h2 className="text-center">Login</h2>
            <div className="form-actions">
            <button
              id="qsLoginBtn"
              className="btn btn-primary"
              onClick={this.login.bind(this)}
            >
              Oauth login
                  </button>
                  </div>
            <br />
            <h6 className="text-center" >Or</h6>

            <hr />

            <form >
              <div className="form-group">
                <label ><b>Username</b></label>
                <input type="username" className="form-control" id="username" placeholder="username" name="username" />
              </div>
              <div className="form-group">
                <label ><b>Password</b></label>
                <input type="password" className="form-control" id="pwd" placeholder="password" name="pswd" />
              </div>
              <div className="text-right">
                <button type="submit " className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>

        </div>
        )
        }

      </HeaderBar>
      // <div>
      //   <Navbar fluid>
      //     <Navbar.Header>
      //       <Navbar.Brand>
      //         <a href="#">Oauth Login</a>
      //       </Navbar.Brand>
      //       <Button
      //         bsStyle="primary"
      //         className="btn-margin"
      //         onClick={this.goTo.bind(this, 'home')}
      //       >
      //         Home
      //       </Button>
      //       {
      //         !isAuthenticated() && (
      //             <Button
      //               id="qsLoginBtn"
      //               bsStyle="primary"
      //               className="btn-margin"
      //               onClick={this.login.bind(this)}
      //             >
      //               Log In
      //             </Button>
      //           )
      //       }
      //       {
      //         isAuthenticated() && (
      //             <Button
      //               id="qsLogoutBtn"
      //               bsStyle="primary"
      //               className="btn-margin"
      //               onClick={this.logout.bind(this)}
      //             >
      //               Log Out
      //             </Button>
      //           )
      //       }
      //     </Navbar.Header>
      //   </Navbar>
      // </div>
    );
  }
}

export default App;
