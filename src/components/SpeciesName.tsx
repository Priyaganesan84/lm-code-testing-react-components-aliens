import React from 'react';
import validateSpeciesName from '../validate/ValidateSpeciesName';

interface SpeciesNameProps {
    speciesName: string;
    onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validate: (value: string) => string[]; // Add this line for the validate prop
  } 

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName, validate }: SpeciesNameProps) =>  {
  const errorMessages = validateSpeciesName(speciesName);

  return (
    <div>
      <label htmlFor="speciesName">Species Name</label>
      <input
        type="text"
        id="speciesName"
        value={speciesName}
        onChange={(e) => onChangeSpeciesName(e)} 
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
  );
};

export default SpeciesName;
