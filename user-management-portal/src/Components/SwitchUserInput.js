import React, { useReducer, useState, useEffect } from 'react';
import Profile from './Profile';
import { API, ACTIONS, common } from '../common';
import { styled } from 'styled-components';

const NOT_FOUND_IMG =
	'https://icon-library.com/images/problem-icon-png/problem-icon-png-1.jpg';

const Container = styled.div`
	align-items: stretch;
	display: flex;
	justify-content: end;
	padding: 20px 10px;
	gap: 10px;
`;

const UserInput = styled.input`
	flex: 1;
	margin-block: 10px;
	max-width: ${({ $maxWidth }) => common.sizing($maxWidth)};
`;

function reducer(state, action) {
	if (action.type === ACTIONS.SET_USER) {
		return {
			...state,
			...action.user,
		};
	}
	throw Error('Unknown action');
}

const storeUser = async ({ userName = 'Micky', dispatch = null }) => {
	if (!dispatch) return;
	const data = await API.getUser(userName);
	const user = data.length
		? data[0]
		: {
				userName: '404',
				src: NOT_FOUND_IMG,
		  };

	dispatch({ type: ACTIONS.SET_USER, user });
};

const SwitchUserInput = ({ maxWidth = 200 }) => {
	const [userInput, setUserInput] = useState('');
	const [userState, dispatch] = useReducer(reducer, {});

	const onChange = (event) => {
		const { value } = event.target;
		setUserInput(value);
	};

	const onKeyDown = (event) => {
		const { key, target } = event;
		const { value } = target;
		if (key !== 'Enter' || !value) return;
		storeUser({ userName: value, dispatch });
		setUserInput('');
	};

	useEffect(() => {
		storeUser({ dispatch });
	}, []);

	return (
		<Container>
			<UserInput
				type='text'
				name='user-name'
				value={userInput}
				onChange={onChange}
				onKeyDown={onKeyDown}
				$maxWidth={maxWidth}
			/>
			<Profile name={userState.userName} photo={userState.src} />
		</Container>
	);
};

export default SwitchUserInput;
