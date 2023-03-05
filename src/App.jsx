import { useState } from "react";

const App = () => {
	//Make a Reactive 'variable' using the React hook 'useState'
	//That will maintain the value through re-renders

	// Remember: useState is a function that returns a variable
	// that represents state, and a function that updates the state.
	//    'answer' == The name that we gave the variable that holds state
	//    'setAnswer' == The name that we gave the function that updates the state

	const [response, setResponse] = useState(false);

	//Make functions to add or remove
	const handleClick = () => {
		count === 8 && setAnswer(true);
	};

	return (
		<div>
			{/* Do what is needed to add the image to the "img" tag */}
			<img alt='The Sheeps' />
			<br />
			<h1>Enter the right amount of sheeps and check your answer</h1>
			{/* Method calls can be used like this "{method}" or "{method()}" which one should be used here?*/}
			{/* Add some buttons to handle a user adding a sheep and removing a sheep */}

			<div>Sheep count: </div>
			<br />
			<button onClick={handleClick}>Check Answer</button>
			<div>Found the answer: {String(response)}</div>
		</div>
	);
};

export default App;
