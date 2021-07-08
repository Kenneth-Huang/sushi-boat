const foodData = [
	{
		name: 'sushi1',
		img: '/img/menu/sushi1.jpg',
		section: 'Nigiri',
	},
	{
		name: 'sushi2',
		img: '/img/menu/sushi2.jpg',
		section: 'small roll',
	},
	{
		name: 'sushi3',
		img: '/img/menu/sushi3.jpg',
		section: 'big roll',
	},
	{
		name: 'sushi4',
		img: '/img/menu/sushi4.jpg',
		section: 'Nigiri',
	},
	{
		name: 'sushi5',
		img: '/img/menu/sushi5.jpg',
		section: 'Nigiri',
	},
	{
		name: 'sushi6',
		img: '/img/menu/sushi6.jpg',
		section: 'small roll',
	},
	{
		name: 'sushi7',
		img: '/img/menu/sushi7.jpg',
		section: 'small roll',
	},
];

export const foodDataObject = foodData.reduce((res, food) => {
	if (!(food.section in res)) {
		res[food.section] = [];
	}
	res[food.section].push(food);
	return res;
}, {});

console.log(foodDataObject);
