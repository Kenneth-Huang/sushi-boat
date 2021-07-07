import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
  font-family: 'Roboto', sans-serif;
}
h1, h2, h3, h4, h5, h6{
  font-family: 'Ubuntu', sans-serif;
}
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<h1>Welcome</h1>
			<div>Hello world</div>
		</>
	);
}

export default App;
