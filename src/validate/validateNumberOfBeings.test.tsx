import validateNumberOfBeings from '../validate/validateNumberOfBeings';

describe('Validation Tests for Number of Beings', () => {
  it('returns an error message when numOfBeings is not a number', () => {
    const invalidNumOfBeings = 'not_a_number';
    const errors = validateNumberOfBeings(invalidNumOfBeings);
    expect(errors).toEqual(['Number of beings must be a number and at least 1,000,000,000.']);
  });

  it('returns an error message when numOfBeings is less than 1,000,000,000', () => {
    const invalidNumOfBeings = '999999999'; // Less than 1,000,000,000
    const errors = validateNumberOfBeings(invalidNumOfBeings);
    expect(errors).toEqual(['Number of beings must be a number and at least 1,000,000,000.']);
  });

  it('returns no errors when numOfBeings is a valid number', () => {
    const validNumOfBeings = '1000000000'; // Valid, exactly 1,000,000,000
    const errors = validateNumberOfBeings(validNumOfBeings);
    expect(errors).toEqual([]);
  });
});
