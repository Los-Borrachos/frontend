import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import APIurl from '../config';
import '../CSS/Client.css';

const Client = ({ match }) => {
	console.log(match)
    const history = useHistory()
    const [client, setClient] = useState()
    const [modal, setModal] = useState(false);
    useEffect(() =>{
        axios
            .get(`${APIurl}/clients/${match.params.clientID}`)
            .then((data)=> setClient(data))
            .catch(console.error)
        }, []);
        // console.log(client)

        const handleChange = (event) => {
            setClient({...client, [event.target.name]: event.target.value})
        };

        const editShowPage = () => {
					setModal(true);
				};

		const closeModal = () => {
					setModal(false);
				};

        const handleSubmit = (event) => {
            event.preventDefault()
            axios.put(`${APIurl}/clients/${match.params.clientID}`, client)
            .then(()=>{
                history.push('/clients')
            }).catch(console.error)
        }

        const handleDelete = () => {
            axios.delete(`${APIurl}/clients/${match.params.clientID}`)
            .then(() => {
                history.push('/clients')
            })
            .catch(console.error)
        }
    
        if (!client){
            return <h1>loading...</h1>
        }
    
    return (
			<div className='client-page'>
				{modal ? (
					<div>
						<div>
							<h2>Edit this client:</h2>
							<form onSubmit={handleSubmit}>
								<label htmlFor='name' />
								Client name:
								<input
									onChange={handleChange}
									name='name'
									value={client.name}
								/>
								<label htmlFor='organization' />
								Organization:
								<input
									onChange={handleChange}
									name='organization'
									value={client.organization}
								/>
								<br />
								<label htmlFor='email' />
								Email:
								<input
									onChange={handleChange}
									name='email'
									value={client.email}
								/>
								<label htmlFor='salestage' />
								Sales Stage:
								<input
									onChange={handleChange}
									name='salestage'
									value={client.salestage}
								/>
								<br />

								<label htmlFor='' />
								Revenue:
								<input
									onChange={handleChange}
									name=''
									value={client.salestage}
								/>

								<br />
								<button type='submit'>Submit</button>
							</form>
							<button onClick={closeModal}>Close</button>
						</div>
					</div>
				) : null}

				<h3> Client: {client.data.name} </h3>
				<ul>
					<li>Email: {client.data.email}</li>
					<li>Organization: {client.data.organization}</li>
					<li>Next Steps: {client.data.nextSteps}</li>
					<li>Sales Stage: {client.data.salesStage}</li>
					<li>Revenue: ${client.data.totalRevenue}</li>
				</ul>
				<button onClick={editShowPage}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
			</div>
		);
};

export default Client;