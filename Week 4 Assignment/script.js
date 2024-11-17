// Get DOM elements
const tempInput = document.getElementById('tempInput');
const convertFrom = document.getElementById('convertFrom');
const convertTo = document.getElementById('convertTo');
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('result');

// Conversion logic
function convertTemperature(value, from, to) {
  if (from === to) return value;

  // Convert to Celsius first
  let tempInCelsius;
  if (from === 'fahrenheit') {
    tempInCelsius = (value - 32) * (5 / 9);
  } else if (from === 'kelvin') {
    tempInCelsius = value - 273.15;
  } else {
    tempInCelsius = value; // It's already in Celsius
  }

  // Convert from Celsius to the desired unit
  if (to === 'fahrenheit') {
    return tempInCelsius * (9 / 5) + 32;
  } else if (to === 'kelvin') {
    return tempInCelsius + 273.15;
  } else {
    return tempInCelsius;
  }
}

// Handle conversion
convertButton.addEventListener('click', () => {
  const value = parseFloat(tempInput.value);
  const from = convertFrom.value;
  const to = convertTo.value;

  if (isNaN(value)) {
    result.textContent = "Please enter a valid temperature.";
    result.classList.add("text-red-500");
    return;
  }

  const convertedValue = convertTemperature(value, from, to);
  result.textContent = `Converted Temperature: ${convertedValue.toFixed(2)}° ${to.charAt(0).toUpperCase() + to.slice(1)}`;
  result.classList.remove("text-red-500");
});
