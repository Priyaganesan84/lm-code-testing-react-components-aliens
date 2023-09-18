import validateReasonForSparing from '../validate/validateReasonForSparing';

describe('Validation Tests for Reason for Sparing', () => {
  it('returns an error message when reason is too short', () => {
    const invalidReason = 'Too short'; // Less than 17 characters
    const errors = validateReasonForSparing(invalidReason);
    expect(errors).toEqual(['Reason for sparing must be between 17 and 153 characters.']);
  });

  it('returns an error message when reason is too long', () => {
    const invalidReason = 'This is a very long reason that exceeds the character limited character of between 17 and 153.. Please eneter correct reason for sparing......................'; // More than 153 characters
    const errors = validateReasonForSparing(invalidReason);
    expect(errors).toEqual(['Reason for sparing must be between 17 and 153 characters.']);
  });

  it('returns no errors when reason is within the valid character limit', () => {
    const validReason = 'A valid reason for sparing'; // Valid, between 17 and 153 characters
    const errors = validateReasonForSparing(validReason);
    expect(errors).toEqual([]);
  });
});
