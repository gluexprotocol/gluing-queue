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

## How to Submit an Update  

If you are a **protocol team or community member**, you can submit a **Pull Request (PR)** to:  

1. Provide missing **trade volume, TVL, or chain deployment data**.  
2. Request a **re-evaluation of your Gluing Score**.  
3. Assign a **bounty to fast-track integration**.  

### **Steps to Update the Queue**  
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
  "gluing_score": 20000000,
  "rank": 3,
  "bounty": "1000 USDC"
}
```

4. Submit a Pull Request using the PR Submission Template.
5. The GlueX team will review and approve your update.

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
