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
            fightWeaponAttack: (this.props.fightWeaponAttack===undefined? 0: this.props.fightWeaponAttack)
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
        this.state.getUserHealth(this.state.userHealth);

    };



render()
    {

        // console.log(this.props.individualMonsterHealth);
        // console.log(this.props);
        // console.log("user health in monster comp" + this.state.userHealth);

        if(this.state.monsterHealth > 0)
        {
        return (
            <div>

                <h3>Monster Health :{this.state.monsterHealth}</h3>
                <h3>Attack :{this.state.monsterAttack}</h3>
                <button className="btn-danger" onClick={(e)=>this.healthTracker(e)}>Cookie Attack!</button>
            </div>


        );
     }
        else
        {

            return (
                <div>
                    <h1 className="text-danger" >  Alas!!! {this.props.monsterName}  is Dead :-/ </h1>

                </div>)



        }



    }
}



export default Monsters;
