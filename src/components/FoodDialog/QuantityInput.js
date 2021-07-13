import React from 'react';
import styled from 'styled-components';
import { Title } from 'style/Title';
import * as Color from 'style/Color';

const StyledInput = styled.input`
	padding: 10px;
	font-size: 1rem;
	width: 20px;
	text-align: center;
	border: none;
	outline: none;
`;

const QuantityContainer = styled(Title)`
	height: 25px;
	display: flex;
`;

const IncreasementBtn = styled.div`
	width: 23px;
	color: ${Color.DARK_RED};
	text-align: center;
	cursor: pointer;
	margin: 0 10px;
	border: 1px solid ${Color.DARK_RED};
	${(p) =>
		p.disable &&
		`opacity:0.5;
pointer-events: none;
`}
	&:hover {
		background-color: ${Color.LIGHT_RED};
	}
`;

export const QuantityInput = ({ quantityHook }) => {
	const { value, setValue } = quantityHook;
	return (
		<QuantityContainer>
			<div>Quantity:</div>
			<IncreasementBtn
				disable={value === 1}
				onClick={() => setValue(value - 1)}
			>
				-
			</IncreasementBtn>
			<StyledInput {...quantityHook} />
			<IncreasementBtn onClick={() => setValue(value + 1)}>+</IncreasementBtn>
		</QuantityContainer>
	);
};
