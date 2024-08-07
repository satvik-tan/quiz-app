import React, { useState } from 'react';
import './Question.css'; // Import the CSS file for styling

const Question = ({ question, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onSubmit = () => {
    handleAnswer(selectedOption);
  };

  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedOption === option}
                onChange={onOptionChange}
                className="checkbox"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={onSubmit} disabled={selectedOption === null}>
        Submit
      </button>
    </div>
  );
};

export default Question;
