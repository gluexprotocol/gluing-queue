# Gluing Queue – Prioritizing Liquidity Module Integrations  

The **Gluing Queue** ranks liquidity modules based on their importance to the ecosystem and its integration partners. 

<br>


## How is Priority Determined?

Each liquidity module is ranked using the **Gluing Score** formula:   

```math

\text{Gluing Score} = (\text{7d Trade Volume}) * (\text{Nr of Chains Deployed}) * (\text{TVL})

```
<br>

- Trade volume and TVL should be in millions, USD.
- If any data is missing, the protocol is placed at the bottom of the queue.  
- Anyone (protocol teams, community members) can challenge rankings by submitting updated data with verifiable sources.  

🔗 **View the Live Queue:** https://gluex.xyz/gluing-queue

<br>


## How to add a protocol to the gluing queue?

If you are a **protocol team or community member**, you can submit a **Pull Request (PR)** for one of the following reasons:  

1. Add your protocol to the queue.
2. Provide missing trade volume, TVL, or chain deployment data.  
3. Request a re-evaluation of your Gluing Score.  
4. Assign a bounty to fast-track integration.  

> NOTE:
>
> Before submitting an update to the gluing queue, please ensure your liquidity module has not already been glued to GlueX.  
>
> The latest list of integrated protocols is available here: [GlueX Integrated Liquidity](https://router.gluex.xyz/liquidity/staging).

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
    "bounty_add_on":{
        "amount": null,
        "token_address": null,
        "token_symbol": null,
        "network": null
    },
    "status": "not_glued",
    "active_gluers": [],
    "prs": []
}
```

4. Submit a Pull Request using the PR Submission Template.
5. The GlueX team will review and approve your update.

<br>

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
| `glue_pending`   | A PR has been approved and the liquidity module is ready to be onboarded into GlueX |
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
    "bounty_add_on":{
        "amount":null,
        "token_address":null,
        "token_symbol":null,
        "network":null
    },
    "status": "glue_pending",
    "active_gluers": ["<gluer1_github_profile_url>", "<gluer2_github_profile_url>"],
    "prs": [
        {
            "author": "<gluer1_github_profile_url>",
            "url": "<gluer1_pr_url>",
            "submitted_at": "2024-04-03T18:45:00Z"
        },
        {
            "author": "<gluer2_github_profile_url>",
            "url": "<gluer2_pr_url>",
            "submitted_at": "2024-04-04T09:22:00Z"
        }
    ]
}
```

4. Submit a Pull Request using the PR Submission Template.
5. The GlueX team will review and approve your update.

---

<br>

# GlueX Bounty System

The GlueX Bounty System defines how contributors ("Gluers") are rewarded for integrating liquidity modules into GlueX. The system rewards effort, originality, and ecosystem value while allowing additional incentives from the protocols themselves.

<br>


## How the System Works


The total bounty achievable by a Gluer upon successful integration is computed as follows:

```math

\text{Total Protocol Gluing Bounty} = \text{Base Payout} × \text{Complexity} × \text{Uniqueness} + \text{Bounty Add-On} 

```

### Base Payout

The base payout for gluing a protocol is determined according the the protocol's rank in the [Glueing Queue](https://gluex.xyz/gluing-queue). The current tier-to-payout system implemented for base payouts is as follows. 

| Rank Range       | Tier   | Base Payout |
|------------------|--------|--------------|
| 1 – 10           | Tier 1 | $400         |
| 11 – 30          | Tier 2 | $300         |
| 31 – 60          | Tier 3 | $200         |
| 61 – 90          | Tier 4 | $100         |
| 91+              | Tier 5 | $50          |

<br>

> NOTE:
>
> Base payouts are the primary driver of GlueX-funded rewards. They may be adjusted at the discretion of GlueX Protocol and must be announced to the Gluer community in advance.


### Complexity Multiplier

Complexity is assessed after PR submission based on the **effective lines of code (LoC)** written in the implementation file (excluding boilerplate, imports, or repeated config). The goal is to reward integrations that require deeper understanding and more extensive logic.


| Complexity Tier | Approx. Lines of Code | Multiplier |
|------------------|------------------------|------------|
| Tier 1           | ≤ 100                  | ×1.0       |
| Tier 2           | 101 – 200              | ×1.1       |
| Tier 3           | 201 – 300              | ×1.2       |
| Tier 4           | 301 – 400              | ×1.3       |
| Tier 5           | 401 – 500              | ×1.4       |
| Tier 6           | 501 – 600              | ×1.5       |
| Tier 7           | 601 – 700              | ×1.6       |
| Tier 8           | 701 – 800              | ×1.7       |
| Tier 9           | 801 – 900              | ×1.8       |
| Tier 10          | 901 – 1000             | ×2.0       |

<br>

> NOTE:
>
> Reviewers should count only functional logic: comments, imports, and boilerplate should be excluded. If an integration spans multiple files, total LoC may be summed.

### Uniqueness Multiplier

The Uniqueness Factor is a multiplier applied to a bounty after a Gluer submits a liquidity module. It helps differentiate between:

- Protocols that are original and technically novel

- Protocols that are minor forks or clones of already-glued architectures

The idea is simple. The more original and technically distinct the protocol is, the more valuable the integration—and the higher the bounty.


| Protocol Type       | Multiplier |
|---------------------|------------|
| Fork / Direct Clone | ×0.2       |
| Modified Fork       | ×0.6       |
| Original Protocol   | ×1.0       |

<br>

> NOTE:
>
> Gluers are encouraged to provide documentation or context in the PR to help reviewers assess originality. GlueX Labs may validate claims through internal review or community feedback.

### Bounty Add-on

If a protocol wants faster integration, it can offer a **bounty add-on** to incentivize Gluers to prioritize its module.  

---
<br>

## **Steps to assign a bounty add-on to a protocol**  

1. Fork this repository.
2. Navigate to `data/gluing_queue.json`.  
3. Update the protocol's data by populating the fileds relevant to the bounty add-on:  

```json
{
    "protocol": "Protocol X",
    "docs": "<module_docs_url>",
    "chains": ["Ethereum", "Polygon"],
    "trade_volume_7d_million": 100,
    "tvl_million": 200,
    "bounty_add_on": {
        "amount": 1000,
        "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "token_symbol": "USDC",
        "network": "Ethereum"
    },
    "status": "not_glued",
    "active_gluers": [],
    "prs": []
}
```

4. Submit a Pull Request using the PR Submission Template.
5. The GlueX team will review and approve your update. 

> To ensure the integrity of the gluing process, we might require bounties to be locked on an escrow account as soon as a Gluer has officially started your integration.

---

<br>

## Additional Resources  

For further information on integration, ranking, and submitting requests, refer to:  

- **[Live Gluing Queue](https://gluex.xyz/#/gluing-queue)** – View the latest queue rankings.  
- **[PR Submission Template](./PR-template.md)** – Follow the correct format when updating the queue.  
- **[GlueX Liquidity Module Integration Guide](https://github.com/gluexprotocol/liquidity-module-self-integration)** – Technical documentation for developing a liquidity module.  

For inquiries, contact the GlueX team at:  
<br>

**Telegram:** https://t.me/+yf_US2ACNrgyNzY0
