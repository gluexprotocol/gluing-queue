# Gluing Queue – Prioritizing Liquidity Module Integrations  

The **Gluing Queue** ranks liquidity modules based on their importance to the ecosystem and its integration partners.

## How is Priority Determined?

Each liquidity module is ranked using the **Gluing Score** formula:   

```math

Gluing Score = (\text{7d Trade Volume}) * (\text{Nr of Chains Deployed}) * (\text{TVL})

```
<br>

- Trade volume and TVL should be in millions, USD.
- If any data is missing, the protocol is placed at the bottom of the queue.  
- Anyone (protocol teams, community members) can challenge rankings by submitting updated data with verifiable sources.  

🔗 **View the Live Queue:** https://gluex.xyz/#/gluing-queue

---

> **NOTE**  
> Before submitting an update to the gluing queue, please ensure your liquidity module has not already been glued to GlueX.  
>
> The latest list of integrated protocols is available here: [GlueX Integrated Liquidity](https://router.gluex.xyz/liquidity/staging).

## How to add a protocol to the gluing queue?

If you are a **protocol team or community member**, you can submit a **Pull Request (PR)** for one of the following reasons:  

1. Add your protocol to the queue.
2. Provide missing trade volume, TVL, or chain deployment data.  
3. Request a re-evaluation of your Gluing Score.  
4. Assign a bounty to fast-track integration.  

### **Steps to get added to the queue**  
1. **Fork this repository.**  
2. Navigate to `docs/data/gluing_queue.json`.  
3. Update your protocol's data following the example below:  

```json
{
  "protocol": "Protocol X",
  "docs": "<module_docs_url>",
  "chains": ["Ethereum", "Polygon"],
  "trade_volume_7d_million": 100,
  "tvl_million": 200,
  "bounty": "1000 USDC",
  "status": "not_glued",
  "active_gluers": [],
  "PRs": []
}
```

4. Submit a Pull Request using the PR Submission Template.
5. The GlueX team will review and approve your update.


## How to update a protocol in the gluing queue?

If you are an **active gluer**, you can submit a PR to:

1. Change the **status** of a protocol in the queue from `not_glued` to `being_glued`.
2. Change the **status** of a protocol in the queue from `being_glued` to `glue_pending`.
3. Add PR details to a protocol in the queue.

The status in the queue represents a protocol's integration stage. 

| **Status**      | **Description**                                                             |
|------------------|------------------------------------------------------------------------------|
| `not_glued`      | No one has started working on this module                                   |
| `being_glued`    | One or more Gluers are actively working on the integration                  |
| `glue_pending`   | One or more PRs have been submitted and are awaiting review                 |
| `glued`          | Module has been integrated into the GlueX execution layer                   |


### **Steps to update a protocol in the gluing queue**  
1. **Fork this repository.**  
2. Navigate to `docs/data/gluing_queue.json`.  
3. Update the protocol's data by changing the status, adding yourself as active gluer or adding a PR according to the following example:  

```json
{
  "protocol": "Protocol X",
  "docs": "<module_docs_url>",
  "chains": ["Ethereum", "Polygon"],
  "trade_volume_7d_million": 100,
  "tvl_million": 200,
  "bounty": "1000 USDC",
  "status": "glue_pending",
  "active_gluers": ["gluer123", "gluer456"],
  "PRs": [
    {
      "author": "gluer123",
      "url": "<pr_url>",
      "submitted_at": "2024-04-03T18:45:00Z"
    },
    {
      "author": "gluer456",
      "url": "<pr_url>",
      "submitted_at": "2024-04-04T09:22:00Z"
    }
  ]
}
```

4. Submit a Pull Request using the PR Submission Template.
5. The GlueX team will review and approve your update.

### **Gluing Status**  

The status in the queue represents a protocol's integration stage. 

| **Status**      | **Description**                                                             |
|------------------|------------------------------------------------------------------------------|
| `not_glued`      | No one has started working on this module                                   |
| `being_glued`    | One or more Gluers are actively working on the integration                  |
| `glue_pending`   | One or more PRs have been submitted and are awaiting review                 |
| `glued`          | Module has been integrated into the GlueX execution layer                   |

---

## Fast-Tracking a Module’s Integration  

If your protocol wants **faster integration**, you can offer a **bounty** to incentivize GlueX's Gluers community to prioritize your module.  

### How to Expedite Your Integration  
1. **Submit a Pull Request (PR)** following the [PR Submission Template](./PR-template.md).  
2. **Provide complete and verifiable data** for trade volume, TVL, and supported chains.  
3. **Assign a bounty** to attract faster implementation:  
   - Specify the amount of tokens and token to be rewarded.  
   - Bounties will be displayed publicly in the Gluing Queue.  
4. **Discuss your integration with the GlueX team** to optimize the process.  

To ensure the integrity of the gluing process, we might require bounties to be locked on an escrow account as soon as a Gluer has officially started your integration.

---

## Additional Resources  

For further information on integration, ranking, and submitting requests, refer to:  

- **[Live Gluing Queue](https://gluex.xyz/#/gluing-queue)** – View the latest queue rankings.  
- **[PR Submission Template](./PR-template.md)** – Follow the correct format when updating the queue.  
- **[GlueX Liquidity Module Integration Guide](https://github.com/gluexprotocol/liquidity-module-self-integration)** – Technical documentation for developing a liquidity module.  

For inquiries, contact the GlueX team at:  
<br>

**Telegram:** https://t.me/+yf_US2ACNrgyNzY0
