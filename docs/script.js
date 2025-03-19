document.addEventListener("DOMContentLoaded", function () {
    let queueData = [];

    fetch("data/glueing_queue.json") // Ensure this path matches your actual JSON location
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("JSON Data Loaded Successfully:", data); // Debugging step
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
        .catch(error => {
            console.error("Error loading queue data:", error);
        });
});
