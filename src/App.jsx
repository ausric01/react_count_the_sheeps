import { useState } from "react";

const App = () => {
	//Create state by calling the React hook 'useState'
	//Remember, this will maintain value through re-renders
	//    Hint: useState is a function from react that returns 2 values..

	const [response, setResponse] = useState(false);

	const handleClick = () => {
		//Here, we should check to see if the user's
		//count is equal to the count of sheep on the image
	};

	return (
		<div>
			<img alt='Sheeps' src={"/sheeps.jpg"} />
			<br />
			<h1>Enter the right amount of sheeps and check your answer</h1>
			{/* Add buttons to handle a user adding and removing sheep 

          Hint: HTML tags have a property called "onClick" that can be used to handle a click event
          We use this property as follows: 
              `onClick={() => {}}` or,
            we can pass in reference to a function like so
              `onClick={function}` or 
              `onClick={() => function()}`
      */}
			<div>Sheep count: </div>
			<br />
			<button onClick={handleClick}>Check Answer</button>
			<div>Found the answer: {String(response)}</div>
		</div>
	);
};

export default App;
