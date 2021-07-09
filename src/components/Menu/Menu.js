import React from 'react';
import styled from 'styled-components';
import { foodDataObject } from 'data/foodData';
import { FoodGrid, FoodCard, FoodTitleLabel } from 'components';

const MenuStyled = styled.div`
	margin: 0 400px 50px 20px;
	min-height: 50vh;
`;

export const Menu = ({ setSelectedFood }) => {
	return (
		<MenuStyled>
			{Object.entries(foodDataObject).map(([section, foods], index) => (
				<div key={section + index}>
					<h2>{section}</h2>
					<FoodGrid>
						{foods.map((food, index) => (
							<FoodCard
								img={food.img}
								key={food.name + index}
								onClick={() => setSelectedFood(food)}
							>
								<FoodTitleLabel>{food.name}</FoodTitleLabel>
							</FoodCard>
						))}
					</FoodGrid>
				</div>
			))}
		</MenuStyled>
	);
};
