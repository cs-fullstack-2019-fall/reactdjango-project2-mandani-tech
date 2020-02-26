import React, {Component} from 'react';
 import giphy from './giphy.gif';

class Home extends Component
{
    render()
    {
        return (

            <div>
                <img src={giphy} className="App-logo" alt="logo" />
            </div>
        );
    }
}




export default Home;
