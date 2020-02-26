import React,{Component} from 'react';

class Shop extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            weaponsList: <h3>Loading</h3>,
            itemEquipped:this.props.itemEquipped
        }
    }


    componentDidMount()
    {

        fetch(`get_weapon_model/`)
            .then(data => data.json())
            .then((response) => {
                console.log(response);

                let tempData = response.map(
                    (each) =>
                    {
                        console.log(each);
                        return (

                            <div key={each.id}>


                                <h3>Weapon  : {each.weaponName}</h3>
                                <h3>Attack  : {each.weaponAttack}</h3>
                                <h3>Avatar  : <br/><img src={each.weaponAvatar} height="200" alt="img"/></h3>
                                <button className="btn-danger" onClick={(e)=>this.props.equipWeapon(each,e)}>Equip Weapon</button>
                                {/*<h3>Weapon Equipped :{this.state.itemEquipped? "Yes": "No"}</h3>*/}
                                <hr/>


                            </div>)

                    }
                );

                this.setState({ weaponsList: tempData})

            });
    };


    render()
    {
        if (this.state.itemEquipped)



        {
            return(<div>

                <h2>Weapon Equipped</h2>
                {this.state.weaponsList}

            </div>)
        }

        else {


            return(<div>
                {this.state.weaponsList}

            </div>)
        }
    }
}

export default Shop;
