import React from 'react';
import { Link } from 'react-router-dom';

const Show = ({ client, index }) => {
	return (
		<div>
			<Link to={`/clients/${client._id}`}>
				<p>{client.client}</p>
			</Link>
		</div>
	);
};

export default Show;
