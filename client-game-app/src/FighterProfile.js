import React,{Component} from 'react';

class FighterProfile extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            userProfile: <h3>Loading</h3>,
        }
    }


    componentDidMount()
    {

        fetch(`get_user_model/${this.props.user.userID}`)
            .then(data => data.json())
            .then((response) => {
                console.log(response);
                let tempData = response.map(
                    (each) =>
                    {
                        console.log(each);
                        return (

                            <div key={each.id}>

                                <h1>{each.username}</h1>
                                <h3>Attack : {each.userAttack}</h3>
                                <h3>Health Power :{each.userHealth}</h3>
                                <h3>My Avatar<br/><img src={each.userAvatar} height="200"/></h3>
                                <h3>Weapon Equipped :{each.itemEquipped}</h3>

                            </div>)

                    }
                );

                this.setState({userProfile: tempData})

            });
    };


    render() {
        return(<div>
            {this.state.userProfile}
        </div>)
    }
}

export default FighterProfile;
