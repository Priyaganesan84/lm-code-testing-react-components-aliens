// validate_sum_answer.ts
const validateSumAnswer = (sumAnswer: string): string[] => {
    const errors: string[] = [];
  
    if (sumAnswer !== "4") {
      errors.push("What is 2 + 2 must be answered with '4'.");
    }
  
    return errors;
  };
  
  export default validateSumAnswer;
  