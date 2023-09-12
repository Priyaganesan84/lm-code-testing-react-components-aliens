// validate_planet_name.ts
const validatePlanetName = (planetName: string): string[] => {
    const errors: string[] = [];
  
    if (planetName.length < 2 || planetName.length > 49) {
      errors.push("Planet Name must be between 2 and 49 characters.");
    }
   
    return errors;
  };
  
  export default validatePlanetName;
  