import React from 'react';
import styled from 'styled-components';
import {
	DialogContent,
	DialogFooter,
	Button as ConfirmButton,
} from 'components';

const OrderStyled = styled.div`
	position: fixed;
	right: 0;
	top: 78px;
	width: 340px;
	height: calc(100vh - 80px);
	background-color: white;
	box-shadow: 0px 5px 8px 1px #80808069;
	z-index: 10;
	display: flex;
	flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
	height: 100%;
	padding: 20px;
`;

const OrderSection = styled.div`
	padding: 10px 5px;
	border-bottom: 1px solid grey;
`;

const OrderRow = styled.div`
	padding: 10px 0;
	display: grid;
	grid-template-columns: 10% 55% 10% 25%;
	justify-content: space-between;
`;

export const Order = ({ orders, setOrders }) => {
	const emptyOrderInfo = 'Your order list is empty';

	const showOrders = (orders) => {
		const sumText =
			orders.length === 1
				? 'Found 1 order in your cart.'
				: `Found ${orders.length} orders in your cart.`;
		return (
			<>
				<OrderSection>{sumText}</OrderSection>
				<OrderSection>
					{orders.map((order, index) => (
						<OrderRow key={order.name + index}>
							<div>1</div>
							<div>{order.name}</div>
							<div></div>
							<div>{order.price}</div>
						</OrderRow>
					))}
				</OrderSection>
			</>
		);
	};
	return (
		<OrderStyled>
			<OrderContent>
				{orders && orders.length === 0 ? emptyOrderInfo : showOrders(orders)}
			</OrderContent>
			<DialogFooter>
				<ConfirmButton>Checkout</ConfirmButton>
			</DialogFooter>
		</OrderStyled>
	);
};
