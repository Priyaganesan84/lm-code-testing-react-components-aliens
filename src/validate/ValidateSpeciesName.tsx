// validate_species_name.ts
const validateSpeciesName = (speciesName: string): string[] => {
    const errors: string[] = [];
  
    if (speciesName.length < 3 || speciesName.length > 23) {
      errors.push("Species Name must be between 3 and 23 characters.");
    }
     return errors;
  };
  
  export default validateSpeciesName;
  