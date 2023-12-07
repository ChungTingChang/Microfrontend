import { API, ACTIONS } from './index';

const USER_STORE = {
	users: [],
	filteredUsers: [],
};

export const UserReducer = (state = USER_STORE, action) => {
	const { type, payload } = action;
	if (type === ACTIONS.SET_USERS) {
		return { ...state, users: payload };
	}
	return state;
};

export const getUsers = async () => {
	const users = await API.getUsers();
	USER_STORE.users = users ?? [];

	return users;
};

// export const filteredUsers = (key, value) => {
// 	const filteredUsers = USER_STORE.users.filter((_user) =>
// 		key !== 'roles' ? _user[key] === value : _user[key].includes(value)
// 	);

// 	USER_STORE = {
// 		...USER_STORE,
// 		filteredUsers,
// 	};
// };

export default USER_STORE;
