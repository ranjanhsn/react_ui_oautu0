import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserLoginFetchData } from '../../Actions/actions'
import * as Constants from '../../utils/Constants';
import {
    Redirect,
} from 'react-router-dom';
import config from '../../utils/config.json';
import { ToastsContainer, ToastsStore } from 'react-toasts';


import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: '' };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    twitterResponse = (e) => {

        console.log("twitterResponse:", e)
    };

    facebookResponse = (e) => {
        // console.log("facebookResponse:", e);

        if (e.accessToken) {
            e.type = "facebook";
            var payload = {
                accessToken: e.accessToken,
                data_access_expiration_time: e.data_access_expiration_time,
                email: e.email,
                expiresIn: e.expiresIn,
                id: e.id,
                name: e.name,
                reauthorize_required_in: e.reauthorize_required_in,
                signedRequest: e.signedRequest,
                type: e.type,
                pictureUrl: e.picture.data.url,
                userID: e.userID
            }

            let Url = Constants.REGISTERANDLOGIN;
            this.props.dispatch(UserLoginFetchData(Url, payload));
        }
    };

    googleResponse = (e) => {



        var payload = {
            El: e.El,
            access_token: e.accessToken,
            token_type: e.Zi.token_type,
            expires_at: e.Zi.expires_at,
            expires_in: e.Zi.expires_in,
            first_issued_at: e.Zi.first_issued_at,
            tokenId: e.tokenId,
            login_hint: e.Zi.login_hint,
            scope: e.Zi.scope,
            type: e.Zi.idpId,
            googleId: e.googleId,
            email: e.profileObj.email,
            familyName: e.profileObj.familyName,
            givenName: e.profileObj.givenName,
            googleId: e.profileObj.googleId,
            imageUrl: e.profileObj.imageUrl,
            name: e.profileObj.imageUrl
        }
        let Url = Constants.REGISTERANDLOGIN;
        this.props.dispatch(UserLoginFetchData(Url, payload));

        // console.log("googleResponse:", payload);
    };
    onFailure = (error) => {
        console.log("onFailure:", error)
    }

    componentWillReceiveProps(nextProps) {   

        if (nextProps.registerResponse) {

            console.log("response:",nextProps.registerResponse)
            if (nextProps.registerResponse.Status == 200) {
                ToastsStore.success(nextProps.registerResponse.message);
                this.state.isAuthenticated = true;

                if(nextProps.registerResponse.LoginType == "facebook")
                {
                    this.state.name =  nextProps.registerResponse.Data.Fb[0].name
                }
                else if(nextProps.registerResponse.LoginType== "google")
                {
                    this.state.name =  nextProps.registerResponse.Data.Gmail[0].givenName +" "+nextProps.registerResponse.Data.Gmail[0].familyName
                }
                this.state.email = nextProps.registerResponse.Data.email;


                
               
            }
            else {
                ToastsStore.error(nextProps.registerResponse.message)
            }
        }



    }


    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.name}
                    </div>
                    <div>
                        {this.state.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                    {/* <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                        onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse" /> */}
                    <FacebookLogin
                        appId={config.FACEBOOK_APP_ID}
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.facebookResponse} />
                    <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />

                </div>
            );

        return (
            <div >
                {content}
                <ToastsContainer store={ToastsStore} />
            </div>
        );
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

export default connect(mapStateToProps)(Login);