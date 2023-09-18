import validateSumAnswer from '../validate/validateSumAnswer';

describe('Validation Tests for Sum Answer', () => {
  it('returns an error message when the sum answer is incorrect', () => {
    const incorrectAnswer = '5'; // Incorrect answer
    const errors = validateSumAnswer(incorrectAnswer);
    expect(errors).toEqual(["What is 2 + 2 must be answered with '4'."]);
  });

  it('returns no errors when the sum answer is correct', () => {
    const correctAnswer = '4'; // Correct answer
    const errors = validateSumAnswer(correctAnswer);
    expect(errors).toEqual([]);
  });
});
