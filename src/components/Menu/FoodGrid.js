import styled from 'styled-components';
import { Title } from 'style/Title';

export const FoodGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;

export const FoodCard = styled(Title)`
	height: 100px;
	padding: 10px;
	font-size: 1.1.rem;
	background-image: url(${(p) => p.img});
	background-position: center;
	background-size: cover;
	filter: contrast(0.85);
	border-radius: 7px;
	box-shadow: 0px 0px 6px 0px #796161;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export const FoodTitleLabel = styled.div`
	position: absolute;
	z-index: -1;
	background: rgba(255, 255, 255, 0.7);
`;
