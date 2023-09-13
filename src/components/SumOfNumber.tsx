import React from 'react';

interface SumAnswerProps {
  sumAnswer: string;
  onChangeSumAnswer: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  validate: (value: string) => string[]; // Add this line for the validate prop
}

const SumAnswer: React.FC<SumAnswerProps> = ({sumAnswer,onChangeSumAnswer,validate,
    }: SumAnswerProps) => { const errorMessages = validate(sumAnswer);

  return (
    <div>
      <label htmlFor="sumAnswer">What is 2 + 2</label>
      <select
        id="sumAnswer"
        value={sumAnswer}
        onChange={(e) => onChangeSumAnswer(e)}
        className={errorMessages.length > 0 ? 'input-error' : ''}
      >
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
      {errorMessages.length > 0 && (
        <div className="error-messages">
          {errorMessages.map((error, index) => (
            <div key={index} className="error-message">
              {error}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SumAnswer;
