import React, { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import validateSpeciesName from '../validate/ValidateSpeciesName';
import PlanetName from './PlanetName';
import validatePlanetName from '../validate/ValidatePlanetName';
import NumberOfBeings from './NumberOfBeings';
import validateNumberOfBeings from '../validate/validateNumberOfBeings';
import SumAnswer from './SumOfNumber';
import validateSumAnswer from '../validate/validateSumAnswer';
import ReasonForSparing from './ReasonForSparing';
import validateReasonForSparing from '../validate/validateReasonForSparing';

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
            onChangePlanetName={(e) => setPlanetName(e.target.value)}
            validate={validatePlanetName}/>
        </div>
        <div>
          <NumberOfBeings 
          numberOfBeings={numOfBeings}
          onChangeNumberOfBeings={(e) => setNumOfBeings(e.target.value)}
          validate={validateNumberOfBeings}/>
        </div>
          
        <div>
          <SumAnswer sumAnswer={sumAnswer}  
          onChangeSumAnswer={(e) => setSumAnswer(e.target.value)}
          validate={validateSumAnswer} />

         </div>
        <div>
        <ReasonForSparing reasonForSparing={reasonForSparing}
          onchangeReasonSparing={(e) => setReasonForSparing(e.target.value)}
          validate={validateReasonForSparing}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default W12MForm;

