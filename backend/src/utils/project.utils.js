exports.calculateBudgetRange = (hourlyRate) => {
  const minBudget = hourlyRate ? hourlyRate * 0.8 : 0;
  const maxBudget = hourlyRate ? hourlyRate * 1.2 : Number.MAX_SAFE_INTEGER;
  
  return { minBudget, maxBudget };
};