import sheeps from './images/sheeps.jpg';
import { useState } from 'react';

function App() {
  //// Make a variable to hold the sheep count ////
  //// Take the boolean variable below for reference, it will act very similarly ////
  //// Hint the way we use the useState we set the original value of it to false  ////
  const [answer, setAnswer] = useState(false);

  //// Make functions to add or remove to the sheep count ////

  const handleAnswerClick = () => {
    if (count === 8) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
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
      <button onClick={handleAnswerClick}>Check Answer</button>
      <div>Found the answer: {String(answer)}</div>
    </div>
  );
}

//// DO what is needed to export DEFAULT app ////
