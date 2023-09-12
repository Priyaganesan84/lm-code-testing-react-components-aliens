import React from 'react';
import validateNumberOfBeings from '../validate/validateNumberOfBeings';

interface NumberOfBeingsProps {
    numberOfBeings: string;
    onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validate: (value: string) => string[]; // Add this line for the validate prop
  } 

const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings, validate }:  NumberOfBeingsProps 
    ) =>  {
  const errorMessages = validateNumberOfBeings(numberOfBeings);

  return (
    <div>
        <label htmlFor='Numberofbeings'>Number of beings</label>
          <input
            type='text'
            id='Numberofbeings'
            value={numberOfBeings}
            onChange={(e) => onChangeNumberOfBeings(e)} 
            />

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
  ); }
               
  export default NumberOfBeings;