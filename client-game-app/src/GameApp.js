import React, {Component} from 'react';
import sesame from './sesame.jpg';
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
    Link,

} from "react-router-dom";


// _________________________________________________________________________________________________________

class GameApp extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            user :{
                isLoggedIn: false,
                username: null,
                userID: 0,
                itemEquipped: false,
                doneEditFlag:true



            }
        }
    }
//________________________When the User hits submit on login this function is fired______________________

    onSubmitLoginForm=(e)=>{
        e.preventDefault();
        let usernameFromInput= e.target.username.value;
        let passwordFromInput= e.target.password.value;

        console.log(usernameFromInput);

//________________________Verifying the user name password from backend____________________________________

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
            .then(response=>
            {
                // console.log(response);
                if (response === "False") {
                    this.setState({messageToUsers: "Username or password incorrect !"})
                }

                else {
                    this.loginForm(usernameFromInput, response)

                }
            });
    };
    //__________________________________ LOGIN FUNCTION_____________________________________________

    loginForm=(usernameFromInput, response)=>{

                    this.setState(
                        {
                            user: {
                                isLoggedIn: true,
                                username: usernameFromInput,
                                userID: response
                            }
                        });
                };
    // _______________________________________LOG OUT FUNCTION_________________________________________

    logout=()=>{
        this.setState({
            user:{
                isLoggedIn: false,
                username: null,
                userID: 0
            }
        })

    };
//___________________________________WHEN USER EDITS THE USER INFORMATION THIS FUNCTION ID CALLED___________

    editCallBackFunc=(response)=>{

        this.setState({
            user:{
                isLoggedIn:true,
                username: response.username,
                password: response.password,
                userAvatar: response.userAvatar,
                doneEdit:false

            }
        });
        // this.setState({doneEditFlag:false});
    // this.props.history.push("/displayUserProfile")
};

// this function is getting called in shop on button clicked for weapon equipped. saved state is sent to fighet profile to render profile conditionally
    equipWeapon = (each,e) =>
    {
        console.log(each.weaponAttack);
        this.setState({

            fightWeaponAttack: each.weaponAttack,
            fightWeaponAvatar: each.weaponAvatar,
            fightWeaponName: each.weaponName,
            itemEquipped:true
        });

    };



    render()
    {
//___________________________________________________ The Logged In user will see this in  the render______________________________________
        if (this.state.user.isLoggedIn)
        {
            return (

                <div>
                    <h1 style={{color:"magenta",fontSize:40}}>Welcome to Sesame Street {this.state.user.username}</h1>

                    <Router>

                        <nav className = " navbar navbar navbar-light jumbotron" style={{backgroundColor: "#e3f2fd"}}>
                            <Link className="navbar-link"  to="/displayUserProfile"> My Profile </Link>
                            <Link className="navbar-link" to="/displayAllMonsters"> Cookie Fight !</Link>
                            <Link className="navbar-link" to="/editUserProfile">  Edit Monster  </Link>
                            <Link className="navbar-link" to="/displayWeapons">Shop</Link>
                            <Link className="navbar-link" to="/" onClick={this.logout}>  Log Out</Link>
                        </nav>

                        <Switch>
                            <Route path="/displayUserProfile">
                                <FighterProfile fightWeaponName={this.state.fightWeaponName} user={this.state.user} fightWeaponAvatar={this.state.fightWeaponAvatar} fightWeaponAttack={this.state.fightWeaponAttack} itemEquipped={this.state.itemEquipped} />
                            </Route>

                            <Route path="/displayAllMonsters"  >
                                <Fight fightWeaponName={this.state.fightWeaponName} user={this.state.user} fightWeaponAttack={this.state.fightWeaponAttack}    fightWeaponAvatar={this.state.fightWeaponAvatar}   itemEquipped={this.state.itemEquipped}/>
                            </Route>

                            <Route path="/editUserProfile" >
                                <EditUserProfile user={this.state.user} doneEditFlag={this.state.doneEditFlag} editCallBackFunc={this.editCallBackFunc}/>
                            </Route>

                            <Route path="/displayWeapons"  >
                                <Shop itemEquipped={this.itemEquipped}  equipWeapon={this.equipWeapon}/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )

        }
        //____________________________Logged out user will see this in in render________________________________________________________
        else{

            return (

                <div>



                    <img src={sesame} className="App-logo" alt="logo" height={1} width={500}/>
                    <h1  style={{borderRadius:20, color:"magenta", fontSize:40}}>Welcome To The Cookie Fight Club </h1>

                    {/*{this.state.messageToUsers}*/}


                    <Router>

                        <Switch>

                            <Route path="/NewUser" component={NewUser}>
                                {/*<Link className="router-link" to="Netflix"> Login </Link>*/}

                            </Route>


                            <Route path="/" >

                                <Link className="router-link" to="NewUser"><h3>Create a New Monster OR</h3></Link>
                                <h2>Please sign in!</h2>

                                <form onSubmit={(e)=>this.onSubmitLoginForm(e)}>
                                    <label htmlFor="username">Monster Name</label>
                                    <input type="text" id="username"/><br/>

                                    <label htmlFor="password">Magic Word</label>
                                    <input  type="text" id="password"/><br/>
                                <button className= "btn-success">Submit</button>


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
