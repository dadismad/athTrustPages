export const prepareEnvironment = () => {
	const apiHost = import.meta.env.VITE_API_HOST;
	const apiToken = import.meta.env.VITE_API_TOKEN;

	const myHeaders = new Headers();
	myHeaders.append("Authorization", `bearer ${apiToken}`);

	const requestOptions = {
		method: 'GET',
		headers: myHeaders
	}

	return {
		apiHost,
		requestOptions
	}
}
