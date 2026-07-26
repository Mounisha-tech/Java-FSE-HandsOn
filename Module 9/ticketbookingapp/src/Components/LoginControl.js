import React, { Component } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class LoginControl extends Component {

    constructor() {

        super();

        this.state = {

            isLoggedIn: false

        };

    }

    handleLogin = () => {

        this.setState({

            isLoggedIn: true

        });

    };

    handleLogout = () => {

        this.setState({

            isLoggedIn: false

        });

    };

    render() {

        if (this.state.isLoggedIn) {

            return (

                <div>

                    <button onClick={this.handleLogout}>
                        Logout
                    </button>

                    <UserPage />

                </div>

            );

        }

        else {

            return (

                <div>

                    <button onClick={this.handleLogin}>
                        Login
                    </button>

                    <GuestPage />

                </div>

            );

        }

    }

}

export default LoginControl;