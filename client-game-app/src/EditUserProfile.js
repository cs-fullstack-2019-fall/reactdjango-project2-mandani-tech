import React, {Component} from 'react';

class EditUserProfile extends Component
{

    edit_item = (e) => {
        e.preventDefault();
        fetch('/user/' + this.props.user.userID/
            {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body:  JSON.stringify({
                id:this.props.user.userID,
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                userAvatar: document.getElementById("userAvatar").value,



            })
        })
            .then(data=>data.json())
            .then(response=>this.props.loginForm(response))
            .then(()=>console.log("blah"));

    };

    render()
    {
        return (
            <div>
                <form onSubmit={this.edit_item}>
                    <label htmlFor = "username"> Change my username :</label>
                    <input type = "text" id = "username" /><br/>

                    <label htmlFor = "password" >Change my password :</label>
                    <input type="text" id="password" /><br/>

                    <label htmlFor="userAvatar">Change my Avatar :</label>
                    <input type="text" id="userAvatar" placeholder= "Add the image url here" /><br/>

                    <button>Submit</button>



                </form>

            </div>
        );
    }
}

export default EditUserProfile;
