import { useState } from 'react';

export const useQuantity = (initQuantity) => {
	const [value, setValueState] = useState(initQuantity || 1);
	const onChange = (e) => {
		setValue(+e.target.value);
	};

	const setValue = (value) => {
		if (+value >= 1) {
			setValueState(value);
		}
	};
	return { value, setValue, onChange };
};
