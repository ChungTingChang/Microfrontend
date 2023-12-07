const getUsers = async () => {
	const response = await fetch('http://localhost:3000/users');
	return await response.json();
};

const getUser = async (userName = '') => {
	const response = await fetch(
		`http://localhost:3000/users?userName_like=${userName}`
	);
	return await response.json();
};

export default { getUsers, getUser };
