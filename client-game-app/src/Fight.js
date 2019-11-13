import React,{Component} from 'react';

class Fight extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            monsterList: <h3>Loading</h3>,
            userProfile: '',
            userHealth:''

        }
    }

    userHealthTracker =(monsterAttack,e)=>
    {
        console.log(this.state.userHealth);
        // console.log(userHealth);
        // console.log(monsterAttack.target);
        // console.log(userHealth,monsterAttack);
        this.setState((prevState,props)=>
            ({
                userHealth:prevState.userHealth - monsterAttack,
            })
        );
        // console.log("I got a click " );
    };





    componentDidMount()
    {

        fetch(`get_monster_model/`)
            .then(data => data.json())
            .then((response) => {
                // console.log(response);
                let tempData = response.map(
                    (each) =>
                    {
                        // console.log(each)
                        return (

                            <div key={each.id}>


                                <h3>Weapon :{each.monsterName}</h3>
                                <h3>Attack :{each.monsterAttack}</h3>
                                <h3>Health :{each.monsterHealth}</h3>
                                <h3>Avatar :<br/><img src={each.monsterAvatar} height="200" alt="img"/></h3>
                                <button onClick={(e)=>this.userHealthTracker(each.monsterAttack,e)}>Attack!</button>
                                <hr/>

                            </div>)

                    }
                );

                this.setState({ monsterList: tempData})

            });

        fetch(`get_user_model/${this.props.user.userID}`)
            .then(data => data.json())
            .then((response) => {
                // console.log(response);
                let tempData = response.map(
                    (each) =>
                    {
                        this.setState({userHealth: each.userHealth});

                        return (

                            <div key={each.id}>

                                <h1>{each.username}</h1>
                                <h3>Attack : {each.userAttack}</h3>
                                <h3>Health Power :{each.userHealth}</h3>
                                <h3>My Avatar<br/><img src={each.userAvatar} height="200" alt="img"/></h3>
                                <h3>Weapon Equipped :{each.itemEquipped ? "Yes": "No"}</h3>
                                {/*<button onClick={this.userHealthTracker(each.userHealth)}>Attack</button>*/}

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
            {this.state.monsterList}

        </div>)
    }
}

export default Fight;
