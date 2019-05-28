import React, { Component } from 'react';

import HeaderBar from '../HeaderBar';

class Prices extends Component
{

    constructor() {
        super();

    }

    render()
    {
        const { isAuthenticated } = this.props.auth;

        return  (
            <HeaderBar isAuthenticated={isAuthenticated()} >
              {isAuthenticated() &&(  <div className="container-fluid">
                <div className="jumbotron vertical-cente align">
                        <h1>Simple,fair pricing</h1>
                        <p>Sign up for a yearly plan and receive one month for free</p>
                        <div className="monthyanually">
                        <button type="button" className="btn btn-primary" id="#home">MONTHLY</button>
                        <button type="button" className="btn btn-light" id="#menu1">ANNUAL</button>
                        <table className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th><span className="deve">Developer</span><br></br><sup>$</sup><span className="numfon">7</span>/month <br></br>Get started with powerful <br></br>API and site monitoring</th>
                                <th><span className="star">Starter</span><br></br><sup>$</sup><span className="numfon">29</span>/month<br></br> Everything.Enough to <br></br>power any young company</th>
                                <th><span className="grow">Growth</span><br></br><sup>$</sup><span className="numfon">75</span>/month<br></br> Everything+growing room <br></br>for new appss and projects</th>
                                <th><span className="busin">Business</span><br></br><sup>$</sup><span className="numfon">199</span>/month <br></br>Keeps the enterprise <br></br>purring like a kitten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>5</td>
                                <td>15</td>
                                <td>40</td>
                                <td>100</td>
                            </tr>
                            <tr>
                            <td>John</td>
                                <td>1</td>
                                <td>5</td>
                                <td>15</td>
                                <td>30</td>
                            </tr>
                            <tr>
                            <td>John</td>
                                <td><span className="c">1min/10min</span></td>
                                <td><span className="c">1min/10min</span></td>
                                <td><span className="c">1min/10min</span></td>
                                <td><span className="c">1min/10min</span></td>
                            </tr>
                            <tr>
                            <td>John</td>
                                <td>1</td>
                                <td>3</td>
                                <td>5</td>
                                <td>10</td>
                            </tr>
                            <tr>
                            <td>John</td>
                                <td>✖</td>
                                <td>5</td>
                                <td>10</td>
                                <td>20</td>
                            </tr>
                            <tr>
                            <td><span className="c">dummytext sgdauy</span></td>
                                <td>16</td>
                                <td>16</td>
                                <td>16</td>
                                <td>16</td>
                            </tr>
                            <tr>
                            <td>John</td>
                            <td><span className="d">✔</span></td>
                            <td><span className="d">✔</span></td>
                            <td><span className="d">✔</span></td>
                            <td><span className="d">✔</span></td>
                            </tr>
                            <tr>
                            <td>John</td>
                            <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                            </tr>
                            <tr>
                            <td><span className="c">dummytext sgdauy</span></td>
                            <td><span className="d">✔</span></td>
                            <td><span className="d">✔</span></td>
                            <td><span className="d">✔</span></td>
                            <td><span className="d">✔</span></td>
                            </tr>
                            <tr>
                            <td>John</td>
                                <td>10</td>
                                <td>50</td>
                                <td>150</td>
                                <td>300</td>
                            </tr>
                            <tr>
                            <td><span className="c">dummytext sgdauy</span></td>
                                <td>✖</td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                            </tr>
                            <tr>
                            <td><span className="c">dummytext sgdauy</span></td>
                                <td>✖</td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>✖</td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                            </tr>
                            <tr>
                            <td><span className="c">dummytext sgdauy</span></td>
                                <td>✖</td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                                <td><span className="d">✔</span></td>
                            </tr>
                            <tr>
                            <td>John</td>
                                <td>✖</td>
                                <td>✖</td>
                                <td>✖</td>
                                <td><span className="d">✔</span></td>
                            </tr>
                            <tr>
                            <td>John</td>
                                <td>✖</td>
                                <td>✖</td>
                                <td>✖</td>
                                <td><span className="d">✔</span></td>
                            </tr>
                                    <tr>
                                        <td></td>
                                        <td><button type="button" className="btn btn-success" id="#home">Start free trail</button></td>
                                        <td><button type="button" className="btn btn-success" id="#home">Start free trail</button></td>
                                        <td><button type="button" className="btn btn-success" id="#home">Start free trail</button></td>
                                        <td><button type="button" className="btn btn-success" id="#home">Start free trail</button></td>
                                    </tr>
                        </tbody>
                    </table>
                        </div>
                    </div>
                    
                </div>)}


            </HeaderBar>



        )
    }
        







}

export default Prices;