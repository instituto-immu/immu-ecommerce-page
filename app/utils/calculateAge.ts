export function calculateAge(birthYear: number): string {
    const currentYear = new Date().getFullYear();
  
    if (birthYear > currentYear) {
      throw new Error("Birth year cannot be in the future.");
    }

    const currentAgev = currentYear - birthYear;
  
    return currentAgev.toString();
  }
  