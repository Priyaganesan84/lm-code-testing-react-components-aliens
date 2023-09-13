import React from 'react';
import validatePlanetName from '../validate/ValidatePlanetName';

interface PlanetNameProps {
    planetName: string;
    onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validate: (value: string) => string[]; // Add this line for the validate prop
  } 

const PlanetName : React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName, validate }: PlanetNameProps) =>  {
  const errorMessages = validatePlanetName(planetName);

  return (
    <div>
      <label htmlFor="planetName">Planet Name</label>
      <input
        type="text"
        id="planetName"
        value={planetName}
        onChange={(e) => onChangePlanetName(e)} 
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
               
  export default PlanetName;