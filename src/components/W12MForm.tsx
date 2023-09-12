import React, { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import validateSpeciesName from '../validate/ValidateSpeciesName';
import PlanetName from './PlanetName';
import validatePlanetName from '../validate/ValidatePlanetName';

const W12MForm = () => {
  // Create state variables for form fields
  const [speciesName, setSpeciesName] = useState('Humans');
  const [planetName, setPlanetName] = useState('Earth');
  const [numOfBeings, setNumOfBeings] = useState('2');
  const [sumAnswer, setSumAnswer] = useState('4'); // Default value
  const [reasonForSparing, setReasonForSparing] = useState('Reason..');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log the form data
    console.log({
      speciesName,
      planetName,
      numOfBeings,
      sumAnswer,
      reasonForSparing,
    });
  };

  return (
    <section className='w12MForm'>
      <W12MHeader />

      {/* Form */}
      <form role='form' onSubmit={handleSubmit}>
        <div>
           <SpeciesName
            speciesName={speciesName}
            onChangeSpeciesName={(e) => setSpeciesName(e.target.value)}
            validate={validateSpeciesName}/>
        </div>
        <div>
          <PlanetName
            planetName={planetName}
            onChangeSpeciesName={(e) => setPlanetName(e.target.value)}
            validate={validatePlanetName}/>
        </div>
        <div>
          <label htmlFor='Numberofbeings'>Number of beings</label>
          <input
            type='text'
            id='Numberofbeings'
            value={numOfBeings}
            onChange={(e) => setNumOfBeings(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='sumAnswer'>What is 2 + 2</label>
          <select
            id='sumAnswer'
            value={sumAnswer}
            onChange={(e) => setSumAnswer(e.target.value)}
          >
            <option value='4'>4</option>
            <option value='Not 4'>Not 4</option>
          </select>
        </div>
        <div>
          <label htmlFor='reasonforSparing'>Reason for sparing</label>
          <textarea
            id = 'reasonforSparing'
            value={reasonForSparing}
            onChange={(e) => setReasonForSparing(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default W12MForm;

