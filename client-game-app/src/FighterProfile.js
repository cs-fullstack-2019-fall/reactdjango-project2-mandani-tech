import React,{Component} from 'react';
import Shop from "./Shop";

class FighterProfile extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            userProfile: <h3>Loading</h3>,
            itemEquipped: false,
            fightWeaponAvatar:this.props.fightWeaponAvatar

        }
    }



    componentDidMount()
    {

        fetch(`get_user_model/${this.props.user.userID}`)
            .then(data => data.json())
            .then((response) =>
            {
                console.log(response);
                let tempData = response.map(
                    (each) =>
                    {
                        console.log(each);

                        this.setState({
                                itemEquipped: each.itemEquipped,
                                userAttack:each.userAttack,
                                userHealth:each.userHealth,
                                userAvatar:each.userAvatar,
                                username:each.username





                            }
                        );
                        return (

                            <div key={each.id}>

                                {/*<h1>{each.username}</h1>*/}
                                {/*<h3>Attack : {each.userAttack}</h3>*/}
                                {/*<h3>Health Power :{each.userHealth}</h3>*/}
                                {/*<h3>My Avatar<br/><img src={each.userAvatar} height="200" alt="img"/></h3>*/}
                                {/*<h3>Weapon Equipped :{each.itemEquipped? "Yes": "No"}</h3>*/}


                            </div>)

                    }
                );

                // this.setState({userProfile: tempData})


            });
    };




        render()
        {
            // console.log(this.props);
            if (this.props.itemEquipped)
            {
            return (

                <div>
                {/*{this.state.userProfile}*/}
                    <h1 className="text-capitalize text-danger ">{this.state.username}</h1>
                    <h3>Attack : {this.state.userAttack}</h3>
                    <h3>Health Power :{this.state.userHealth}</h3>
                    <h3>My Avatar<br/><img src={this.state.userAvatar} height="200" alt="img"/></h3>
                    <h3>Weapon Equipped :{this.props.itemEquipped? "Yes": "No"}</h3>
                    <h3>Weapon Attack : {this.props.fightWeaponAttack}</h3>
                    <br/><img src={this.state.fightWeaponAvatar} height="200" alt="img"/>


                </div>)
        }

            else{
                return (

                    <div>
                        {/*{this.state.userProfile}*/}
                        <h1 className=" text-capitalize text-success ">{this.state.username}</h1>
                        <h3>Attack : {this.state.userAttack}</h3>
                        <h3>Health Power :{this.state.userHealth}</h3>
                        <h3>My Avatar<br/><img src={this.state.userAvatar} height="200" alt="img"/></h3>
                        <h3>Weapon Equipped :{this.state.itemEquipped? "Yes": "No"}</h3>

                    </div>)

            }



    }
}





export default FighterProfile;
