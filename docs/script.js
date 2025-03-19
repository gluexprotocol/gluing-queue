document.addEventListener("DOMContentLoaded", function () {
    let queueData = [];

    fetch("../data/glueing_queue.json")
        .then(response => response.json())
        .then(data => {
            let queue = data.queue;

            // Calculate Glueing Score dynamically
            queue.forEach(item => {
                let tradeVolume = item.trade_volume_7d_million ? parseFloat(item.trade_volume_7d_million) : 0;
                let tvl = item.tvl_million ? parseFloat(item.tvl_million) : 0;
                let numChains = item.chains ? item.chains.length : 1; // Default to 1 if missing

                // Compute Glueing Score
                item.glueing_score = tradeVolume * numChains * tvl;
            });

            // Sort the queue by Glueing Score (highest first)
            queue.sort((a, b) => (b.glueing_score || 0) - (a.glueing_score || 0));

            queueData = queue; // Store data for filtering
            displayQueue(queue);
        })
        .catch(error => console.error("Error loading queue data:", error));
});

// Function to display queue data in table
function displayQueue(queue) {
    const tableBody = document.querySelector("#queueTable tbody");
    tableBody.innerHTML = ""; // Clear table

    queue.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.protocol}</td>
            <td>${item.chains ? item.chains.join(", ") : "Pending"}</td>
            <td>${item.trade_volume_7d_million ? item.trade_volume_7d_million + "M" : "Unknown"}</td>
            <td>${item.tvl_million ? item.tvl_million + "M" : "Unknown"}</td>
            <td>${item.glueing_score ? item.glueing_score.toLocaleString() : "Pending"}</td>
            <td>${item.bounty && item.bounty !== "None" ? item.bounty : "No Bounty"}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to apply filters
function applyFilters() {
    let filteredQueue = queueData;

    // Filter by Bounty
    let bountyFilter = document.getElementById("bountyFilter").value;
    if (bountyFilter === "hasBounty") {
        filteredQueue = filteredQueue.filter(item => item.bounty && item.bounty !== "None");
    } else if (bountyFilter === "noBounty") {
        filteredQueue = filteredQueue.filter(item => !item.bounty || item.bounty === "None");
    }

    // Filter by TVL
    let minTVL = parseFloat(document.getElementById("tvlFilter").value);
    if (!isNaN(minTVL)) {
        filteredQueue = filteredQueue.filter(item => (item.tvl_million || 0) >= minTVL);
    }

    // Filter by Trade Volume
    let minVolume = parseFloat(document.getElementById("tradeVolumeFilter").value);
    if (!isNaN(minVolume)) {
        filteredQueue = filteredQueue.filter(item => (item.trade_volume_7d_million || 0) >= minVolume);
    }

    displayQueue(filteredQueue);
}

// Function to reset filters
function resetFilters() {
    document.getElementById("bountyFilter").value = "all";
    document.getElementById("tvlFilter").value = "";
    document.getElementById("tradeVolumeFilter").value = "";
    displayQueue(queueData);
}
