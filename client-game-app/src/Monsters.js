import React, {Component} from 'react';

class Monsters extends Component
{


    constructor(props)
    {
        super(props);
        this.state = {

            userHealth: this.props.userHealthsentToMonster,
            monsterHealth: this.props.individualMonsterHealth,
            userAttack: this.props.userAttacksentToMonster,
            monsterAttack: this.props.monsterAttacksentToMonster,
            getUserHealth: this.props.getUserHealth,
            fightWeaponAttack:this.props.fightWeaponAttack
        }
    }

    healthTracker = (e) =>
    {
        // console.log(this.props.userAttacksentToMonster);
        // console.log(this.state.monsterHealth);
        // console.log("healtherTracker " + this.state.userHealth);
        // console.log(this.state.monsterAttack);
        console.log("weapon attack value" + this.state.fightWeaponAttack);
        this.setState((prevState, props) =>
            ({
                userHealth: parseInt(prevState.userHealth )- this.state.monsterAttack,
                monsterHealth: prevState.monsterHealth - this.state.userAttack -this.state.fightWeaponAttack,

            })
        );
        // console.log("I got a click " );

    };



render()
    {
        this.state.getUserHealth(this.state.userHealth);
        // console.log(this.props.individualMonsterHealth);
        // console.log(this.props);
        // console.log("user health in monster comp" + this.state.userHealth);
        return (
            <div>
            <h1>Monster</h1>
                <h3>Monster Health :{this.state.monsterHealth}</h3>
                <h3>Attack :{this.state.monsterAttack}</h3>

                <button className="btn-danger" onClick={(e)=>this.healthTracker(e)}>Attack!</button>




            </div>
        );
    }
}



export default Monsters;
