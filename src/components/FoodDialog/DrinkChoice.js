import React from 'react';
import styled from 'styled-components';

const DrinkChoiceContainer = styled.div`
	padding: 5px;
	margin-bottom: 10px;
`;

const DrinkChoiceCheckboxContainer = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-around;
`;
const DrinkChoiceCheckbox = styled.div`
	margin-right: 10px;
`;

export const DrinkChoice = ({ choices, value, onChange }) => {
	return (
		<DrinkChoiceContainer>
			<h3>Please select any Drink you like</h3>
			<DrinkChoiceCheckboxContainer>
				{choices.map((c, index) => (
					<DrinkChoiceCheckbox key={c + index}>
						<label htmlFor={c + index}>{c}</label>
						<input
							type='radio'
							name='choice'
							id={c + index}
							value={c}
							checked={value === c}
							onChange={onChange}
						/>
					</DrinkChoiceCheckbox>
				))}
			</DrinkChoiceCheckboxContainer>
		</DrinkChoiceContainer>
	);
};
