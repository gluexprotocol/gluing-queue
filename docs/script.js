document.addEventListener("DOMContentLoaded", function () {
  let queueData = [];

  fetch(
    "https://raw.githubusercontent.com/gluexprotocol/gluing-queue/refs/heads/main/data/gluing_queue.json"
  ) // Ensure this matches your hosted file path
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("JSON Data Loaded Successfully:", data); // Debugging step
      let queue = data.queue;

      // Calculate Gluing Score dynamically
      queue.forEach((item) => {
        let tradeVolume = item.trade_volume_7d_million
          ? parseFloat(item.trade_volume_7d_million)
          : 0;
        let tvl = item.tvl_million ? parseFloat(item.tvl_million) : 0;
        let numChains = item.chains ? item.chains.length : 1; // Default to 1 if missing

        // Compute Gluing Score
        item.gluing_score = tradeVolume * numChains * tvl;
      });

      // Sort the queue by Gluing Score (highest first)
      queue.sort((a, b) => (b.gluing_score || 0) - (a.gluing_score || 0));

      queueData = queue; // Store data for filtering
      displayQueue(queue);
    })
    .catch((error) => {
      console.error("Error loading queue data:", error);
    });
});

function displayQueue(queue) {
  const tableBody = document.querySelector("#queueTable tbody");
  if (!tableBody) {
    console.error("Error: Table body not found!");
    return;
  }

  tableBody.innerHTML = ""; // Clear table

  queue.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.protocol}</td>
            <td>${item.chains ? item.chains.join(", ") : "Pending"}</td>
            <td>${
              item.trade_volume_7d_million
                ? item.trade_volume_7d_million + "M"
                : "Unknown"
            }</td>
            <td>${item.tvl_million ? item.tvl_million + "M" : "Unknown"}</td>
            <td>${
              item.gluing_score ? item.gluing_score.toLocaleString() : "Pending"
            }</td>
            <td>${
              item.bounty && item.bounty !== "None" ? item.bounty : "No Bounty"
            }</td>
            <td>${
              item.docs && item.docs !== "NA"
                ? `<a href="${item.docs}" target="_blank">Docs</a>`
                : "Missing"
            }</td>
        `;
    tableBody.appendChild(row);
  });

  console.log("Table updated successfully!");
}
