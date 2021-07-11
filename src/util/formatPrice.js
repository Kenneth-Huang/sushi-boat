const formatPrice = (price) =>
	price.toLocaleString('en-us', { style: 'currency', currency: 'AUD' });

export default formatPrice;
