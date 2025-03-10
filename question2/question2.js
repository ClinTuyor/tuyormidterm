// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
// Example usage
const inputArray = [1, 2, 3, 4, 5, 6]; // Input array of numbers
const evenNumbers = filterEvenNumbers(inputArray); // Call the function

console.log("Even numbers:", evenNumbers);