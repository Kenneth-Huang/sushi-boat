import styled from 'styled-components';
import * as Color from 'style/Color';
import { Title } from 'style/Title';

export const Button = styled(Title)`
	margin: auto;
	padding: 10px;
	height: 20px;
	width: 200px;
	border-radius: 10px;
	text-align: center;
	background: ${Color.DARK_RED};
	cursor: pointer;
`;
