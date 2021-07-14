import React from 'react';
import { PageLayout, Banner, Menu, FoodDialog, Order } from 'components/';
import { useSelectedFood, useOrders, useTitle } from 'hooks/';

const HomePage = () => {
	const selectedFoodHook = useSelectedFood();
	const ordersHook = useOrders();
	useTitle({ ...selectedFoodHook, ...ordersHook });
	return (
		<PageLayout>
			<Banner />
			<FoodDialog {...selectedFoodHook} {...ordersHook} />
			<h1>Menu</h1>
			<Menu {...selectedFoodHook} orders={ordersHook.orders} />
			<Order {...ordersHook} {...selectedFoodHook} />
		</PageLayout>
	);
};

export default HomePage;
