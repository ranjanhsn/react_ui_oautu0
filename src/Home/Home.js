import React, { Component } from 'react';
import { UserLoginFetchData } from '../Actions/actions';
import { connect } from 'react-redux';
import HeaderBar from '../Pages/HeaderBar';

class Home extends Component {
  constructor() {
    super();

    this.apicalltest = this.apicalltest.bind(this)
  }
  login() {
    this.props.auth.login();
  }






  componentWillMount() {

    this.apicalltest();
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("profile:", profile)
      });
    } else {
      this.setState({ profile: userProfile });
      console.log("userProfile:", userProfile)
    }

  }



  apicalltest() {
    // alert('hello');
    // var API_URL = "http://localhost:5000/api/check"

    // const { getAccessToken, getIdToken } = this.props.auth;
    // console.log("getAccessToken:", getAccessToken());
    // console.log("getIdToken:", getIdToken())

    // const headers = { 'Authorization': `Bearer ${getIdToken()}` }

    // axios.post(`${API_URL}`, {}, { headers })
    //   .then(response => {
    //     console.log("response:", response)
    //   })
    //   .catch(error => {
    //     console.log("error:", error);
    //   });
    const { getIdToken } = this.props.auth;

    console.log("getAccess Token:", getIdToken());
    var Url = "http://localhost:5000/api/check";
    var payload = {}
    this.props.dispatch(UserLoginFetchData(Url, payload,getIdToken()));
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.registerResponse) {

      console.log("response:", nextProps.registerResponse)
    }
  }
  render() {
    const { isAuthenticated, } = this.props.auth;
    const { profile } = this.state;
    return (
      <HeaderBar>
        {/* <div className="container">
        {
          isAuthenticated() && (
            <div className="container">
            <button onClick={(e)=>this.apicalltest()}>  API Call </button>
              <div className="profile-area">
                <h1>{profile.name}</h1>
                <Panel header="Profile">
                  <img src={profile.picture} alt="profile" />
                  <div>
                    <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
                    <h3>{profile.nickname}</h3>
                  </div>
                  <pre>{JSON.stringify(profile, null, 2)}</pre>
                </Panel>
              </div>
            </div>
            // <h4>
            //   You are logged in!
            // </h4>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <a style={{ cursor: 'pointer' }}
                onClick={this.login.bind(this)}>
                Log In
                </a>
              {' '}to continue.
              </h4>
          )
        }
      </div> */}


      {isAuthenticated() && ( <div className="container-fluid">
          <div className="container jumbotron vertical-cente">
            <h6><b>Let's make it as concrete a posssible and,as the saying goes,a saaS pricing page is worth a thousand
                            words.</b></h6>
            <br />
            <div className="container-fluid">
              <div className="row">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      {/* style="color: #0D86FF" */}
                      <th><b>Developer</b><br /><h4 className="h-color" >$7/Month</h4>Get started with Powerful <br />API and site monitoring</th>
                      <th><b>Developer</b><br /><h4 className="h-color" >$7/Month</h4>Get started with Powerful <br />API and site monitoring</th>
                      <th><b>Developer</b><br /><h4 className="h-color"> $7/Month</h4>Get started with Powerful <br />API and site monitoring</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>API checks</b></td>
                      <td>5</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td><b>Browser Checks</b></td>
                      <td>1</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><b>Public DashBoard</b></td>
                      <td>1 min/10min</td>
                      <td>1 min/10min</td>
                      <td>1 min/10min</td>
                    </tr>
                    <tr>
                      <td><b>Data center Locations</b></td>
                      <td>1</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><b>SSL Monitoring</b></td>
                      <td>x</td>
                      <td>x</td>
                      <td>x</td>
                    </tr>
                    <tr>
                      <td><b>Email,Slack & webhooks</b></td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        )} 
      </HeaderBar>
    );
  }
}

// export default Home;
function mapStateToProps(state, actions) {
  if (state.fetchLogin && state.fetchLogin.Status) {
    return { registerResponse: state.fetchLogin }


  }
  else {

    return {}


  }

  // console.log("User Login", state.fetchLogin)

}

export default connect(mapStateToProps)(Home);
