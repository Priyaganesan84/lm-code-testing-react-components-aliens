import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

test('NumberOfBeings component renders without errors', () => {
  const { getByLabelText } = render(
    <NumberOfBeings numberOfBeings="5" onChangeNumberOfBeings={() => {}} validate={() => []} />
  );
  const inputElement = getByLabelText('Number of beings');
  expect(inputElement).toBeInTheDocument();
});

