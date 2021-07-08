import React from 'react';
import styled from 'styled-components';
import * as Color from 'style/Color';
import { Title } from 'style/Title';

const Logo = styled(Title)`
	font-size: 2rem;
	color: white;
	display: flex;
	text-shadow: 1px 1px 4px #320a0a;
	justify-content: center;
	align-items: center;
`;

const NavbarStyled = styled.div`
	height: 80px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	position: fixed;
	align-content: center;
	top: 0;
	background: white;
	border-bottom: 2px solid ${Color.DARK_RED};
`;

export const Navbar = () => {
	return (
		<NavbarStyled>
			<Logo>Sushi Boat🍣</Logo>
		</NavbarStyled>
	);
};
