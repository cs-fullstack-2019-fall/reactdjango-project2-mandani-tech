import React,{Component} from 'react';

class Fight extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            weaponsList: <h3>Loading</h3>,

        }
    }

    userHealthTracker =(userHealth,monsterAttack)=>
    {
        console.log(userHealth,monsterAttack);
        this.setState((prevState,props)=>
            ({
                userHealth:prevState.userHealth - monsterAttack,
            })
        )
    };



    componentDidMount()
    {

        fetch(`get_monster_model/`)
            .then(data => data.json())
            .then((response) => {
                console.log(response);
                let tempData = response.map(
                    (each) =>
                    {
                        console.log(each)
                        return (

                            <div key={each.id}>


                                <h3>Weapon :{each.monsterName}</h3>
                                <h3>Attack :{each.monsterAttack}</h3>
                                <h3>Health :{each.monsterHealth}</h3>
                                <h3>Avatar :<br/><img src={each.monsterAvatar} height="200" alt="img"/></h3>
                                <button onClick={this.userHealthTracker(each.monsterAttack)}>Attack</button>
                                <hr/>

                            </div>)

                    }
                );

                this.setState({ weaponsList: tempData})

            });

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
                                <h3>My Avatar<br/><img src={each.userAvatar} height="200" alt="img"/></h3>
                                <h3>Weapon Equipped :{each.itemEquipped ? "Yes": "No"}</h3>
                                <button onClick={this.userHealthTracker(each.userHealth)}>Attack</button>

                            </div>)

                    }
                );

                this.setState({userProfile: tempData})

            });




    };


    render() {
        return(<div>

            {this.state.userProfile}
            <hr/>
            {this.state.weaponsList}
        </div>)
    }
}

export default Fight;
