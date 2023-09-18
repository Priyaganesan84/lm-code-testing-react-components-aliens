import validateSpeciesName from './ValidateSpeciesName'; // Adjust the import path based on your project structure

describe('validateSpeciesName function', () => {
  it('returns an empty array when the speciesName length is between 3 and 23 characters', () => {
    const validSpeciesName = 'ValidSpecies';
    const errors = validateSpeciesName(validSpeciesName);
    expect(errors).toEqual([]);
  });

  it('returns an error message when the speciesName length is less than 3 characters', () => {
    const invalidSpeciesName = 'A'; // Less than 3 characters
    const errors = validateSpeciesName(invalidSpeciesName);
    expect(errors).toEqual(['Species Name must be between 3 and 23 characters.']);
  });

  it('returns an error message when the speciesName length is more than 23 characters', () => {
    const invalidSpeciesName = 'ThisIsAReallyLongSpeciesName'; // More than 23 characters
    const errors = validateSpeciesName(invalidSpeciesName);
    expect(errors).toEqual(['Species Name must be between 3 and 23 characters.']);
  });
});
