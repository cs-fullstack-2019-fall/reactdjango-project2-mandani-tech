import React, {Component} from 'react';
// import {Link} from "react-router-dom";


class NewUser extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            user: {
                isLoggedIn: false,
                username: null,
                userID: 0,
            },
            messageToCreateUsers: "",
        }
    }



    createNewUser = (e) =>
    {
        e.preventDefault();
        let usernameFromInput = document.getElementById("new_username").value;
        let passwordFromInput = document.getElementById("new_password").value;
        let avatarFromInput=document.getElementById('userAvatar').value;

        fetch("/user/", {
            method: 'post',
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameFromInput,
                password: passwordFromInput,
                userAvatar: avatarFromInput,


            })

        })
            .then(data => data.json())
            .then(resp =>
            {
                console.log(resp);
                if (resp.id)
                {
                    console.log(resp);
                    this.setState(
                        {
                            user: {
                                isLoggedIn: true,
                                username: resp.username,
                                userID: resp.id
                            }
                        });
                } else
                {
                    this.setState({messageToCreateUsers: "Username is already taken!"});
                }
            });
    };



    render()
    {
        return (
            <div>


                {this.state.messageToCreateUsers}

                <form onSubmit={this.createNewUser}>
                    <label htmlFor="new_username">Enter New Username</label>
                    <input type="text" id="new_username"/><br/>

                    <label htmlFor="new_password">Enter New Password</label>
                    <input type="text" id="new_password"/><br/>

                    <label htmlFor="userAvatar">My Avatar</label>
                    <input type="text" id="userAvatar" placeholder="Type your image url here"/><br/>

                    <button className="btn-success">Submit</button>


                </form>
                {/*<a href="FighterProfile/">Back</a>*/}


            </div>
        );
    }
}

export default NewUser;
