import React, {Component} from 'react';
import FighterProfile from "./FighterProfile";
import Fight from "./Fight";
import EditUserProfile from "./EditUserProfile";
import Shop from "./Shop";
import Home from "./Home";
import NewUser from "./NewUser"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class GameApp extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            user :{
                isLoggedIn: false,
                username: null,
                userID: 0


            }
        }
    }

    // LOGIN FETCH ENDS HERE

    loginForm=(e)=>{
        e.preventDefault();
        let usernameFromInput=document.getElementById('username').value;
        let passwordFromInput=document.getElementById('password').value;
        console.log(usernameFromInput);

        fetch("/auth_users/",


            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: usernameFromInput,
                    password: passwordFromInput,
                })
            }
        )
            .then(data=>data.text())
            .then(response=> {
                // console.log(response);
                if (response === "False")
                {
                    this.setState({messageToUsers: "Username or password incorrect !"})
                }

                else {
                    this.setState(
                        {
                            user: {
                                isLoggedIn: true,
                                username: usernameFromInput,
                                userID: response
                            }
                        });
                }

            });
    };
    // LOGIN FETCH ENDS HERE

    logout=()=>{
        this.setState({
            user:{
                isLoggedIn: false,
                username: null,
                userID: 0
            }
        })

    };






    render()
    {
//___________________________________________________ The Logged In user will see this
        if (this.state.user.isLoggedIn)
        {
            return (

                <div>
                    <h1>Welcome to the Game {this.state.user.username}</h1>

                    <Router>

                        <nav className = "navbar">


                            <Link className="navbar-link"  to="/displayUserProfile"> Fighter Profile </Link>
                            <Link className="navbar-link" to="/displayAllMonsters"> Fight !</Link>
                            <Link className="navbar-link" to="/editUserProfile"> Edit User Profile</Link>
                            <Link className="navbar-link" to="/displayWeapons">Shop</Link>
                            <Link className="navbar-link" to="/" onClick={this.logout}>  Log Out</Link>

                        </nav>

                        <Switch>
                            <Route path="/displayUserProfile"   >
                                <FighterProfile user={this.state.user}/>

                            </Route>

                            <Route path="/displayAllMonsters" component={Fight} >

                            </Route>

                            <Route path="/editUserProfile" component={EditUserProfile} >

                            </Route>

                            <Route path="/displayWeapons" component={Shop} >

                            </Route>



                            {/*<Route path="/addLead" >*/}
                            {/*    <AddLead user={this.state.user}/>*/}
                            {/*</Route>*/}

                            {/*<Route path="/editLead/:LeadID" component={EditLead}>*/}

                            {/*</Route>*/}

                            <Route path="/">
                                <Home/>
                            </Route>

                        </Switch>


                    </Router>

                </div>
            )

        }
        else{

            return (

                <div>

                    <h1>Welcome to the Game</h1>

                    {this.state.messageToUsers}


                    <Router>

                        <Switch>

                            <Route path="/NewUser" component={NewUser}>
                                {/*<Link className="router-link" to="Netflix"> Login </Link>*/}

                            </Route>


                            <Route path="/" >
                                <h3>Please sign in!</h3>
                                <Link className="router-link" to="NewUser"> Create a New User Login OR</Link>

                                <form onSubmit={this.loginForm}>
                                    <label htmlFor="username">Login Username</label>
                                    <input type="text" id="username"/><br/>

                                    <label htmlFor="password">Login Password</label>
                                    <input type="text" id="password"/><br/>

                                    <button>Submit</button>

                                </form>

                            </Route>



                        </Switch>

                    </Router>




                </div>
            );
        }
    }
}

export default GameApp;
