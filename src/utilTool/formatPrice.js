export const formatPrice = (price) =>
	price.toLocaleString('en-us', { style: 'currency', currency: 'AUD' });
