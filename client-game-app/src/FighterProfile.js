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

        fetch(`userProfile/${this.props.user.id}`)
            .then(data => data.json())
            .then((response) => {
                console.log(response);
                let tempData = response.map(
                    (eachelement) =>
                    {
                        return (

                            <div key={eachelement.id}>

                                <h1>{eachelement.username}</h1>
                                {/*<h3>{eachelement.userHealth}</h3>*/}

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
