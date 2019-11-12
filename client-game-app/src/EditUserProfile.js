import React, {Component} from 'react';

class EditUserProfile extends Component
{

    edit_item = () => {
        fetch('/get_user_model/' + this.props.user.userID,
            {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body:  JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                userAvatar: document.getElementById("userAvatar").value,


            })
        })
            .then(data=>data.json())
            .then(response=>this.props.loginForm(response));

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
