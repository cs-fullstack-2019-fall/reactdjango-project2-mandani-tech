import React,{Component} from 'react';
import Monsters from "./Monsters";
import Link from "react-router-dom";

class Fight extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            arraymonsterList: <h3>Loading</h3>,
            arrayofuserProfile: [],
            itemEquipped:false,
            fightWeaponAttack: this.props.fightWeaponAttack,
            fightWeaponAvatar: this.props.fightWeaponAvatar,
            fightWeaponName:this.props.fightWeaponName




        }
    }

    // userHealthTracker =(monsterAttack,e)=>
    // {
    //     console.log("this is monster health");
    //     console.log(this.state.monsterHealth);
    //
    //     this.setState((prevState,props)=>
    //         ({
    //             userHealth:prevState.userHealth - monsterAttack,
    //             monsterHealth:prevState.monsterHealth - this.state.userAttack,
    //         })
    //     );
    //     // console.log("I got a click " );
    // };
    //

    getUserHealth=(userHealth)=>{

        // console.log(userHealth);

        this.setState({
            userHealth:userHealth


        })

    };



    componentDidMount()
    {

        fetch(`get_user_model/${this.props.user.userID}`)
            .then(data => data.json())
            .then((response) => {
                // console.log(response);
                let tempData = response.map(
                    (each) =>
                    {
                        this.setState({
                            userHealth: each.userHealth,
                            userAttack: each.userAttack,
                            userAvatar: each.userAvatar,
                            username:each.username
                        });

                        return (

                            <div key={each.id}>

                                <h1 className="text-success">{each.username}</h1>
                                <h3>Attack : {each.userAttack}</h3>
                                {/*<h3>Health Power :{each.userHealth}</h3>*/}
                                <h3>My Avatar<br/><img src={each.userAvatar} height="200" alt="img"/></h3>
                                <h3 className="text-warning">Weapon Equipped :{each.itemEquipped ? "Yes": "No"}</h3>




                            </div>)

                    }
                );

                this.setState({arrayuserProfile: tempData})


            });

        fetch(`get_monster_model/`)
            .then(data => data.json())
            .then((response) => {
                // console.log(response);
                let tempData = response.map(
                    (each) =>
                    {
                        // console.log(each)
                        this.setState({
                            monsterHealth: each.monsterHealth,
                            monsterAttack:each.monsterAttack,
                            monsterName:each.monsterName

                        }
                            );

                        return (

                            <div key={each.id}>


                                <h1>{each.monsterName}</h1>
                                {/*<h3>Attack :{each.monsterAttack}</h3>*/}
                                {/*<h3>{each.monsterName}'s Health :{each.monsterHealth}</h3>*/}
                                <h3>Avatar :<br/><img src={each.monsterAvatar} height="300" alt="img"/></h3>
                                {/*<button onClick={(e)=>this.userHealthTracker(each.monsterAttack,e)}>Attack!</button>*/}
                                <Monsters monsterName={this.state.monsterName} fightWeaponAttack={this.props.fightWeaponAttack}  getUserHealth={this.getUserHealth} individualMonsterHealth={this.state.monsterHealth} userAttacksentToMonster={this.state.userAttack} userHealthsentToMonster={this.state.userHealth} monsterAttacksentToMonster={this.state.monsterAttack}/>


                                <hr/>

                            </div>)

                    }
                );

                this.setState({ arraymonsterList: tempData})

            });






    };


    render()


    {
        // console.log(this.props);
        if (this.props.itemEquipped)
        {

            return (<div>


                {/*{this.state.arrayuserProfile}*/}

                {/*<h3> My Health :{this.state.userHealth}</h3>*/}
                {/*<h3>{this.props.itemEquipped}</h3>*/}
                {/*<h3>{this.props.}*/}

                {/*<hr/>*/}

                <h1 className=" text-capitalize text-danger ">{this.state.username}</h1>
                <h3>Attack : {this.state.userAttack}</h3>
                <h3>Health Power :{this.state.userHealth}</h3>
                <h3>My Avatar<br/><img src={this.state.userAvatar} height="300" alt="img"/></h3>
                <h3>Weapon Equipped :{this.props.itemEquipped? "Yes": "No"}</h3>
                <h3>Weapon Name : {this.state.fightWeaponName}</h3>
                <h3>Weapon Attack : {this.props.fightWeaponAttack}</h3>
                <br/><img src={this.state.fightWeaponAvatar} height="200" alt="img"/>




                <hr/>





                {this.state.arraymonsterList}

                {/*<h3>{this.state.monsterHealth}</h3>*/}
                {/*<Monsters individualMonsterHealth={this.state.monsterHealth} userAttacksentToMonster={this.state.userAttack}/>*/}


            </div>)

        }

        else{

            return (<div>


                {this.state.arrayuserProfile}

                <h3> My Health :{this.state.userHealth}</h3>
                <hr/>

                {this.state.arraymonsterList}

                {/*<h3>{this.state.monsterHealth}</h3>*/}
                {/*<Monsters individualMonsterHealth={this.state.monsterHealth} userAttacksentToMonster={this.state.userAttack}/>*/}


            </div>)





        }



    }
}

export default Fight;
