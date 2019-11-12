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


                                <h3>Weapon  : {each.monsterName}</h3>
                                <h3>Attack :{each.monsterAttack}</h3>
                                <h3>Attack :{each.monsterHealth}</h3>
                                <h3>Avatar: <br/><img src={each.monsterAvatar} height="200"/></h3>
                                <button>Attack</button>
                                <hr/>

                            </div>)

                    }
                );

                this.setState({ weaponsList: tempData})

            });
    };


    render() {
        return(<div>
            {this.state. weaponsList}
        </div>)
    }
}

export default Fight;
