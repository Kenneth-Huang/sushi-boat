import { createGlobalStyle } from 'styled-components';
import HomePage from 'pages/HomePage';

const GlobalStyles = createGlobalStyle`
body{
	margin:0;
	min-height: 100vh;	
}
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<HomePage />
			{/* <h1>Welcome</h1>
			<div>Hello world</div> */}
		</>
	);
}

export default App;
