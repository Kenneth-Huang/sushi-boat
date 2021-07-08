import React from 'react';
import { PageLayout, Banner, Menu } from 'components/';

const HomePage = () => {
	return (
		<PageLayout>
			<Banner />
			<h1>Menu</h1>
			<Menu />
		</PageLayout>
	);
};

export default HomePage;
