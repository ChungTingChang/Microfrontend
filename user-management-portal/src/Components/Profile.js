import React from 'react';
import { common } from '../common';
import USER_STORE from '../common/store';
import { styled } from 'styled-components';

const ProfileContainer = styled.div`
	align-items: center;
	display: flex;
	gap: 10px;
	> p {
		color: var(--react-main-color);
		font-weight: 700;
		min-width: 60px;
	}
`;

const PhotoContainer = styled.div`
	border: var(--border-width) solid var(--react-main-color);
	border-radius: 50%;
	background-color: #ffffff;
	height: ${({ $imgSize }) => common.sizing($imgSize)};
	padding: 5px;
	width: ${({ $imgSize }) => common.sizing($imgSize)};
	> p {
		border-radius: 50%;
		background-image: url(${({ $backgroundImg }) => $backgroundImg});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		height: 100%;
		width: 100%;
	}
`;

export default function Profile({
	name = '',
	photo = '',
	photoSize = 40,
	...rest
}) {
	return (
		<ProfileContainer className='profile-img' {...rest}>
			<PhotoContainer $imgSize={photoSize} $backgroundImg={photo}>
				<p />
			</PhotoContainer>
			<p>{name}</p>
		</ProfileContainer>
	);
}
