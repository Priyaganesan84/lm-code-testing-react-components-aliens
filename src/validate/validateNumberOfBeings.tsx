// validate_number_of_beings.ts
const validateNumberOfBeings = (numOfBeings: string): string[] => {
    const errors: string[] = [];
  
    const parsedValue = parseInt(numOfBeings, 10);
    if (isNaN(parsedValue) || parsedValue < 1000000000) {
      errors.push("Number of beings must be a number and at least 1,000,000,000.");
    }
  
    return errors;
  };
  
  export default validateNumberOfBeings;
  