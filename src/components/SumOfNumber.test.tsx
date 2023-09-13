import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SumAnswer from './SumOfNumber';

test('SumAnswer component renders without errors', () => {
  const { getByLabelText } = render(
    <SumAnswer sumAnswer="10" onChangeSumAnswer={() => {}} validate={() => []} />
  );
  const inputElement = getByLabelText('What is 2 + 2');
  expect(inputElement).toBeInTheDocument();
});
