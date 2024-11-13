// Example of how to update exchange rates dynamically
async function fetchRates() {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
  const data = await response.json();
  document.querySelectorAll('.rate h1').forEach(rateElement => {
    // Update rate values as per the data
    rateElement.innerHTML = `${data.rates.DZD}`;
  });
}
fetchRates();
