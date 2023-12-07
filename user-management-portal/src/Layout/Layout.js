import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	align-items: center;
	background-color: var(--main-color);
	display: flex;
	padding: 15px 10px;
	gap: 20px;

	p {
		align-items: center;
		display: flex;
		gap: 10px;

		img {
			height: 20px;
			mix-blend-mode: multiply;
		}
		span {
			font-weight: bold;
		}
	}
`;

const Layout = () => (
	<>
		<Header>
			<p>
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' />
				<span>REACT</span>
			</p>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/users'>Users</NavLink>
		</Header>
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</main>
	</>
);

export default Layout;
