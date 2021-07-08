import React from 'react';
import styled from 'styled-components';
import { foodDataObject } from 'data/foodData';
import { FoodGrid, FoodCard, FoodTitleLabel } from 'components';

const MenuStyled = styled.div`
	margin: 0 400px 50px 20px;
	min-height: 50vh;
`;

export const Menu = () => {
	return (
		<MenuStyled>
			{Object.entries(foodDataObject).map(([key, value], index) => (
				<div key={key + index}>
					<h2>{key}</h2>
					<FoodGrid>
						{value.map((item, index) => (
							<FoodCard img={item.img} key={item.name + index}>
								<FoodTitleLabel>{item.name}</FoodTitleLabel>
							</FoodCard>
						))}
					</FoodGrid>
				</div>
			))}
		</MenuStyled>
	);
};
