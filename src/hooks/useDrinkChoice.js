import { useState } from 'react';

export const useDrinkChoice = (initQuantity) => {
	const [value, setValue] = useState('');
	const onChange = (e) => {
		setValue(e.target.value);
	};

	return { value, setValue, onChange };
};
