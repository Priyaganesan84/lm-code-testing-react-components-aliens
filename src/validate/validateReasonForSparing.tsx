// validate_reason_for_sparing.ts
const validateReasonForSparing = (reason: string): string[] => {
    const errors: string[] = [];
  
    if (reason.length < 17 || reason.length > 153) {
      errors.push("Reason for sparing must be between 17 and 153 characters.");
    }
  
    return errors;
  };
  
  export default validateReasonForSparing;
  