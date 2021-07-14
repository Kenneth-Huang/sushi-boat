import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FoodTitleLabel, Button as ConfirmButton } from 'components';
import { formatPrice, productTotalPrice } from 'utilTool';

import { QuantityInput } from './QuantityInput';
import { DrinkChoice } from './DrinkChoice';
import { useQuantity, useDrinkChoice } from 'hooks';

const Dialog = styled.div`
	position: fixed;
	top: 150px;
	left: calc(50% - 250px);
	background-color: white;
	border: 1 solid grey;
	border-radius: 10px;
	z-index: 6;
	width: 500px;
	/* height: 500px; */
	max-height: calc(90% - 200px);
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
	margin-bottom: 10px;
	background-image: url(${({ img }) => img});
	background-position: center;
	background-size: cover;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const DialogFoodTag = styled(FoodTitleLabel)`
	top: 20%;
	padding: 10px 30px;
	font-size: 2rem;
	.food-price {
		font-size: 1.5rem;
	}
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

export const DialogContent = styled.div`
	min-height: 100px;
	overflow: auto;
	padding: 0 40px;
`;

export const DialogFooter = styled.div`
	border: 2px solid rgb(255 255 255 / 70%);
	height: 60px;
	box-shadow: 0 -2px 10px 0 grey;
	display: flex;
	/* place-items: center; */
	justify-content: space-between;
	align-items: center;
`;

export const FoodDialog = ({
	selectedFood,
	setSelectedFood,
	orders,
	setOrders,
}) => {
	const closeDialog = () => {
		setSelectedFood(null);
		quantityHook.setValue(1);
		drinkChoiceHook.setValue('');
	};

	const quantityHook = useQuantity(selectedFood && selectedFood.quantity);
	const drinkChoiceHook = useDrinkChoice();

	const order = {
		...selectedFood,
		quantity: quantityHook.value,
		drinkChoice: drinkChoiceHook.value,
	};

	useEffect(() => {
		if (selectedFood && selectedFood.quantity) {
			quantityHook.setValue(selectedFood.quantity);
		}
	}, [selectedFood]);

	const addToCart = (order) => {
		let newOrders = [...orders];
		if (selectedFood && selectedFood.index >= 0) {
			newOrders.splice(selectedFood.index, 1, order);
		} else newOrders = [...orders, order];
		setOrders(newOrders);
		closeDialog();
	};

	return selectedFood ? (
		<>
			<Dialog>
				<DialogBanner img={selectedFood.img}>
					<CrossBtn onClick={closeDialog} />
					<DialogFoodTag>
						<div>{selectedFood.name}</div>
						<div className='food-price'>{formatPrice(selectedFood.price)}</div>
					</DialogFoodTag>
				</DialogBanner>
				<DialogContent>
					<QuantityInput quantityHook={quantityHook} />
					{selectedFood.section === 'Drink' ? (
						<DrinkChoice choices={selectedFood.choices} {...drinkChoiceHook} />
					) : null}
				</DialogContent>
				<DialogFooter>
					<ConfirmButton onClick={() => addToCart(order)}>
						Add to Order {formatPrice(productTotalPrice(order))}
					</ConfirmButton>
				</DialogFooter>
			</Dialog>
			<DialogShadow onClick={closeDialog} />
		</>
	) : null;
};
