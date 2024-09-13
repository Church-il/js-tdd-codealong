// utils.js

function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  return currentYear - birthYear; // Calculate the age
}

module.exports = {
  currentAgeForBirthYear
};
