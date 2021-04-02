 import React, { useState, useEffect } from 'react';
import '../CSS/Client.css'

const Client = ({ match }) => {
    // const [client, setClient] = useState(null);

    // useEffect(() => {
    //     fetch()
    //         .then((res) => res.json())
    //         .then((res) => setClient(res.data.find(item => item._id == match.params.clientID)))      
    //         .catch(err => {
    //             alert(`error occurred: ${err}`);
    //         })
    // }, []);

    // if (!client){
    //     return <h2>loading...</h2>
    // } 
    return (
        <div className='client-page'>
            individual client page
        </div>
    );
};

export default Client;