import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';

test('ReasonForSparing component renders without errors', () => {
  const { getByLabelText } = render(
    <ReasonForSparing reasonForSparing="Reason" onchangeReasonSparing={() => {}} validate={() => []} />
  );
  const inputElement = getByLabelText('Reason for sparing');
  expect(inputElement).toBeInTheDocument();
});

