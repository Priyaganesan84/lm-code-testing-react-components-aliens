import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';

describe('Component Tests', () => {
  it('renders SpeciesName without errors', () => {
    const { getByLabelText } = render(
      <SpeciesName speciesName="Test Species" onChangeSpeciesName={() => {}} validate={() => []} />
    );
    const inputElement = getByLabelText('Species Name');
    expect(inputElement).toBeInTheDocument();
  });

  it('displays the correct speciesName value', () => {
    const { getByLabelText } = render(
      <SpeciesName speciesName="Test Species" onChangeSpeciesName={() => {}} validate={() => []} />
    );
    const inputElement = getByLabelText('Species Name') as HTMLInputElement;
    expect(inputElement.value).toBe('Test Species');
  });



 
  
});