interface IncomeRecord {
  [key: string]: number;
}

const riyadIncome: IncomeRecord = {
  // ... existing income records
};

// Calculate total income
const totalIncome = Object.keys(riyadIncome).reduce((total, key) => {
  return total + riyadIncome[key];
}, 0);

console.log(`Total Income: ${totalIncome}`);
