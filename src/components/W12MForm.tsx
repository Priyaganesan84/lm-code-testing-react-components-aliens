import React, { useState } from 'react';
import W12MHeader from './W12MHeader';

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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Species Name</label>
          <input 
            type='text'
            value={speciesName}
            onChange={(e) => setSpeciesName(e.target.value)}
          />
        </div>
        <div>
          <label>Planet Name</label>
          <input
            type='text'
            value={planetName}
            onChange={(e) => setPlanetName(e.target.value)}
          />
        </div>
        <div>
          <label>Number of beings</label>
          <input
            type='text'
            value={numOfBeings}
            onChange={(e) => setNumOfBeings(e.target.value)}
          />
        </div>
        <div>
          <label>What is 2 + 2</label>
          <select
            value={sumAnswer}
            onChange={(e) => setSumAnswer(e.target.value)}
          >
            <option value='4'>4</option>
            <option value='Not 4'>Not 4</option>
          </select>
        </div>
        <div>
          <label>Reason for sparing</label>
          <textarea
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

