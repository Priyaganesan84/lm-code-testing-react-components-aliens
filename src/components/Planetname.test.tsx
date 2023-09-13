import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlanetName from './PlanetName';

test('PlanetName component renders without errors', () => {
  const { getByLabelText } = render(
    <PlanetName planetName="Test Planet" onChangePlanetName={() => {}} validate={() => []} />
  );
  const inputElement = getByLabelText('Planet Name');
  expect(inputElement).toBeInTheDocument();
});

