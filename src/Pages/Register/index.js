import React, { Component } from 'react';

import HeaderBar from '../HeaderBar';

class Register extends Component
{

    constructor() {
        super();

    }

    render()
    {
        const isAuthenticated = false;
        return  (
            <HeaderBar isAuthenticated={isAuthenticated} >

<div className="container jumbotron vertical-cente">
                <h2 className="text-center"><b>Sign Up</b></h2>
                <form>
                    <div className="form-group">
                            <label>Full Name</label>
                            <input type="FullName" className="form-control" id="fullname" placeholder="Full Name" name="fullname"/>
                          </div>
                          <div className="form-group">
                                <label>Email</label>
                                <input type="Email" className="form-control" id="Email" placeholder="Email" name="Email"/>
                              </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" id="username" placeholder="username" name="username"/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" id="pwd" placeholder="password" name="pswd"/>
                  </div>
                  <div className="form-group">
                        <label>Repeat Password</label>
                        <input type="password" className="form-control" id="rpwd" placeholder="Repeat Password" name="rpswd"/>
                      </div>
                      <input type="checkbox" /><span className="chkbox">I agree all statements in Terms of Service</span><br/>
                  <div className="text-right">
                  <button type="submit " className="btn btn-primary">SignUp</button>
                  </div>
                </form>
              </div>



               </HeaderBar>



        )
    }
        







}

export default Register;