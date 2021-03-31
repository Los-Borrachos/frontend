const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:5000'
		: 'https://my-clients-api.some-place-on-the-web.com';
export default APIurl;