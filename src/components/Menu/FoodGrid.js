import styled from 'styled-components';
import { Title } from 'style/Title';

export const FoodGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;

export const FoodCard = styled.div`
	height: 100px;
	padding: 10px;
	font-size: 1.1.rem;
	background-image: url(${(p) => p.img});
	background-position: center;
	background-size: cover;
	filter: contrast(0.85);
	border-radius: 7px;
	box-shadow: 0px 0px 2px 0px #796161;
	margin-top: 5px;
	transition-property: box-shadow filter margin-top;
	transition-duration: 0.1s;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
		filter: contrast(1);
		margin-top: 0;
		margin-bottom: 5px;
		box-shadow: 0px 3px 6px 0px #796161;
	}
`;

export const FoodTitleLabel = styled(Title)`
	position: absolute;
	padding: 5px;
	background: rgba(255, 255, 255, 0.7);
`;
