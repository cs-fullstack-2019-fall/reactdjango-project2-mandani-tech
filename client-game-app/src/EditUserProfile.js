import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {BrowserRouter ,Route} from 'react-router-dom';
import good_quality_group from "./good_quality_group.jpg";
class EditUserProfile extends Component
{


//__________________________________________Update username and password and Avatar _________________________________________

    edit_item = (e) =>
    {
        e.preventDefault();
        // console.log(this.props.user);
        fetch('/user/' + parseInt(this.props.user.userID) + "/",
            {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    id: this.props.user.userID,
                    username: document.getElementById("username").value,
                    password: document.getElementById("password").value,
                    userAvatar: document.getElementById("userAvatar").value,


                })
            })
            .then(data => data.json())
            .then(response =>
            {
                // console.log(response);
                this.props.editCallBackFunc(response);
                console.log(this.props);
                // this.props.history.push("/");
            })


    };

//_____________________________________________Form for user to update their username and password_______________________________________
    render(){
    if (this.props.doneEditFlag)
    {

        return (<Redirect to='/FighterProfile/'/>);


    }

    else {
            return (
                <div>
                    <form onSubmit={this.edit_item}>
                        <label htmlFor="username"> Change my username :</label>
                        <input type="text" id="username" defaultValue={this.props.user.username}/><br/>

                        <label htmlFor="password">Change my password :</label>
                        <input type="text" id="password" defaultValue={this.props.user.password}/><br/>

                        <label htmlFor="userAvatar">Change my Avatar :</label>
                        <input type="text" id="userAvatar" defaultValue={this.props.user.userAvatar}/><br/>

                        <button className="btn-warning">Submit</button>
                        <br/>
                        <br/>

                        <img style={{borderRadius: 20}} src={good_quality_group} className="App-logo" alt="logo"/>


                    </form>

                </div>
            );
        }
    }


}

export default EditUserProfile;
