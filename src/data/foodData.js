const foodData = [
	{
		name: 'sushi1',
		img: '/img/menu/sushi1.jpg',
		section: 'Nigiri',
		price: 3.5,
	},
	{
		name: 'sushi2',
		img: '/img/menu/sushi2.jpg',
		section: 'small roll',
		price: 2.3,
	},
	{
		name: 'sushi3',
		img: '/img/menu/sushi3.jpg',
		section: 'big roll',
		price: 3.8,
	},
	{
		name: 'sushi4',
		img: '/img/menu/sushi4.jpg',
		section: 'Nigiri',
		price: 3.6,
	},
	{
		name: 'sushi5',
		img: '/img/menu/sushi5.jpg',
		section: 'Nigiri',
		price: 3.5,
	},
	{
		name: 'sushi6',
		img: '/img/menu/sushi6.jpg',
		section: 'small roll',
		price: 2.9,
	},
	{
		name: 'sushi7',
		img: '/img/menu/sushi7.jpg',
		section: 'small roll',
		price: 2.6,
	},
];

export const foodDataObject = foodData.reduce((res, food) => {
	if (!(food.section in res)) {
		res[food.section] = [];
	}
	res[food.section].push(food);
	return res;
}, {});
