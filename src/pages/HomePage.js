import React, { useState } from 'react';
import { PageLayout, Banner, Menu, FoodDialog } from 'components/';

const HomePage = () => {
	const [selectedFood, setSelectedFood] = useState();
	return (
		<PageLayout>
			<Banner />
			<FoodDialog
				selectedFood={selectedFood}
				setSelectedFood={setSelectedFood}
			/>
			<h1>Menu</h1>
			<Menu setSelectedFood={setSelectedFood} />
		</PageLayout>
	);
};

export default HomePage;
