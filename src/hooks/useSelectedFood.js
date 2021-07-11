import { useState } from 'react';

export const useSelectedFood = () => {
	const [selectedFood, setSelectedFood] = useState();

	return { selectedFood, setSelectedFood };
};
