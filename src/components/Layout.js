import styled from 'styled-components';
import React from 'react';
import { Navbar } from './Navbar';

const Content = styled.main`
	margin: 80px auto 0 auto;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
	min-height: 90vh;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Ubuntu', sans-serif;
	}
`;

export const PageLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Content>{children}</Content>
		</>
	);
};
