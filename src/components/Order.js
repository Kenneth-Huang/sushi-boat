import React from 'react';
import styled from 'styled-components';
import {
	DialogContent,
	DialogFooter,
	Button as ConfirmButton,
} from 'components';
import { formatPrice, productTotalPrice, taxRate } from 'utilTool';

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
	grid-template-columns: 55% 10% 10% 25%;
	justify-content: space-between;
`;

const OrderSum = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;

	padding: 10px 5px;
	border-bottom: 1px solid grey;
	.order-sum-container {
		width: 95%;
		margin: 0 auto;
		.order-sum-row {
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			flex-direction: row;
			align-items: stretch;
			margin: 0 auto;

			width: 100%;
			padding: 5px 10px;
			font-size: 0.8rem;
		}
	}
`;

export const Order = ({ orders, setOrders }) => {
	const emptyOrderInfo = 'Your order list is empty';

	const orderTotal = orders.reduce(
		(acc, cur) => acc + productTotalPrice(cur),
		0
	);

	const orderTax = orderTotal * taxRate;

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
							<div>{order.name}</div>
							<div>* {order.quantity}</div>
							<div></div>
							<div>{formatPrice(productTotalPrice(order))}</div>
						</OrderRow>
					))}
				</OrderSection>
				<OrderSum>
					<div className='order-sum-container'>
						<div className='order-sum-row'>
							<div>Subtotal:</div>
							<div>{formatPrice(orderTotal - orderTax)}</div>
						</div>
						<div className='order-sum-row'>
							<div>GST:</div>
							<div>{formatPrice(orderTax)}</div>
						</div>
						<div className='order-sum-row'>
							<div>Total:</div>
							<div>{formatPrice(orderTotal)}</div>
						</div>
					</div>
				</OrderSum>
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
