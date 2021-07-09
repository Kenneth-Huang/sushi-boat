import React from 'react';
import styled from 'styled-components';
import { FoodTitleLabel } from 'components';

const Dialog = styled.div`
	position: fixed;
	top: 250px;
	left: calc(50% - 250px);
	background-color: white;
	border: 1 solid grey;
	border-radius: 10px;
	z-index: 6;
	width: 500px;
	height: 800px;
	max-height: calc(80% - 200px);
`;

const DialogShadow = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.7;
	z-index: 5;
`;

const DialogBanner = styled.div`
	min-height: 200px;
	margin-bottom: 200px;
	background-image: url(${({ img }) => img});
	background-position: center;
	background-size: cover;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const DialogFoodName = styled(FoodTitleLabel)`
	top: 30%;
	padding: 10px 30px;
	font-size: 2rem;
`;

const CrossBtn = styled.div`
	position: absolute;
	right: 10px;
	font-size: 2rem;
	color: #fff;
	opacity: 0.7;
	font-weight: 300;
	transition-property: opacity text-shadow;
	transition-duration: 0.2s;
	&:hover {
		text-shadow: 1px 1px 4px #320a0a;
		opacity: 1;
		cursor: pointer;
	}
	&:active {
		text-shadow: none;
	}
	::before {
		content: 'x';
	}
`;

export const FoodDialog = ({ selectedFood, setSelectedFood }) => {
	const closeDialog = () => {
		setSelectedFood(null);
	};
	return selectedFood ? (
		<>
			<Dialog>
				<DialogBanner img={selectedFood.img}>
					<CrossBtn onClick={closeDialog} />
					<DialogFoodName>{selectedFood.name}</DialogFoodName>
				</DialogBanner>
			</Dialog>
			<DialogShadow onClick={closeDialog} />
		</>
	) : null;
};
