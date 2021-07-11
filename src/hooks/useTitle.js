import { useEffect } from 'react';

export const useTitle = ({ selectedFood, orders }) => {
	return useEffect(() => {
		if (selectedFood) document.title = selectedFood.name;
		else
			document.title =
				orders.length === 0
					? 'Sushi Boat'
					: orders.length === 1
					? '[1] item in your cart.'
					: `[${orders.length}] items in your cart.`;
	});
};
