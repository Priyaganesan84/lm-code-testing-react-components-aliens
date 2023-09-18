import validatePlanetName from './ValidatePlanetName'; // Adjust the import path based on your project structure

describe('validatePlanetName function', () => {
  it('returns an empty array when the planetName length is between 2 and 49 characters', () => {
    const validPlanetName = 'ValidPlanet';
    const errors = validatePlanetName(validPlanetName);
    expect(errors).toEqual([]);
  });

  it('returns an error message when the planetName length is less than 2 characters', () => {
    const invalidPlanetName = 'A'; // Less than 2 characters
    const errors = validatePlanetName(invalidPlanetName);
    expect(errors).toEqual(['Planet Name must be between 2 and 49 characters.']);
  });

  it('returns an error message when the planetName length is more than 49 characters', () => {
    const invalidPlanetName = 'ThisIsAReallyLongPlanetNameThatExceedsTheLimitedcharacters'; // More than 49 characters
    const errors = validatePlanetName(invalidPlanetName);
    expect(errors).toEqual(['Planet Name must be between 2 and 49 characters.']);
  });
});
