import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Profile } from '../Components';
import { API, ACTIONS } from '../common';
import { styled } from 'styled-components';

const LOGO =
	'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png';

const PageContainer = styled.div`
	padding: 30px;
	> h3 img {
		height: 15px;
		margin-right: 5px;
	}
	> div {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		padding-top: 10px;
	}
`;

const ProfileContainer = styled.div`
	border: var(--border-width) solid rgba(33, 217, 254, 0.4);
	border-radius: var(--input-border-radius);
	background-color: rgba(33, 217, 254, 0.1);
	display: flex;
	flex-direction: column;
	padding: 20px;
	min-width: 220px;

	> div {
		flex-direction: column;

		p {
			text-align: center;
		}
	}
`;

const ProfileItem = ({ name = '', photo = '', email = '' }) => (
	<ProfileContainer>
		<Profile name={name} photo={photo} photoSize={50} />
		<span>{email}</span>
	</ProfileContainer>
);

const Users = () => {
	const [userList, setUserList] = useState([]);
	const dispatch = useDispatch();
	const users = useSelector(({ UserReducer }) => UserReducer.users);

	useEffect(() => {
		if (!users || !users?.length) {
			API.getUsers().then((data) => {
				dispatch({ type: ACTIONS.SET_USERS, payload: data });
			});
			return;
		}

		setUserList(users);
	}, [users?.length]);
	return (
		<PageContainer id='user-management-portal-page'>
			<h3>
				<img src={LOGO} />
				{/* <img src='../../public/react-favicon.ico' /> */}
				USER MANAGEMENT PORTAL
			</h3>
			<hr />
			<div>
				{userList?.map((user) => (
					<ProfileItem
						key={user.id}
						name={user.userName}
						photo={user.src}
						email={user.email}
					/>
				))}
			</div>
		</PageContainer>
	);
};

export default Users;
