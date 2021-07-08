import React from 'react';
import styled from 'styled-components';
import { foodData } from 'data/foodData';
import { FoodGrid, FoodCard, FoodTitleLabel } from 'components';

const MenuStyled = styled.div`
	margin: 0 400px 50px 20px;
	min-height: 50vh;
`;

export const Menu = () => {
	return (
		<MenuStyled>
			<FoodGrid>
				{foodData.map((d, index) => (
					<FoodCard img={d.img} key={d.name + index}>
						<FoodTitleLabel>{d.name}</FoodTitleLabel>
					</FoodCard>
				))}
			</FoodGrid>
		</MenuStyled>
	);
};
