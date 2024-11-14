document.addEventListener("DOMContentLoaded", () => {
  async function fetchRates() {
    try {
      // Fetch exchange rates, including the API key for authenticated access
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD?apikey=5cc63013abfcd5b317b8a4de`);
      const data = await response.json();
      
      // Update DZD rates
      document.getElementById("dzd-buy").textContent = `${data.rates.DZD.toFixed(2)}`;
      document.getElementById("dzd-sell").textContent = `${(data.rates.DZD * 0.98).toFixed(2)}`;
      document.getElementById("dzd-last-update").textContent = `Last update: ${new Date().toLocaleString()}`;

      // Update VND rates
      document.getElementById("vnd-buy").textContent = `${data.rates.VND.toFixed(2)}`;
      document.getElementById("vnd-sell").textContent = `${(data.rates.VND * 0.98).toFixed(2)}`;
      document.getElementById("vnd-last-update").textContent = `Last update: ${new Date().toLocaleString()}`;
    } catch (error) {
      console.error("Failed to fetch exchange rates:", error);
    }
  }

  // Initial fetch and interval for refreshing every 60 seconds
  fetchRates();
  setInterval(fetchRates, 60000); // Update every 60 seconds
});
