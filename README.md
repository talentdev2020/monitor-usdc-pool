# Frontend Coding Challenge — Ondo Finance

## Live Site

https://monitor-usdc-pool.netlify.app/
## Overview

Our frontend team builds the web application that enables our users to interact with the Ondo Protocol, as well as resources and tooling to help them make educated investment decisions. Many of these services read data directly from the blockchain.

The goal of this challenge is to build a simple web application that monitors transactions in the [`USDC-ETH` pair](https://v2.info.uniswap.org/pair/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc) on Uniswap V2.

> ***We don't expect you to be familiar with any of the tools below. We're hoping to give you a preview of our tech stack and day-to-day tasks, while assessing your ability to pick up new concepts and tools on the go.***


## Instructions

### Context

- Ondo uses Typescript, React, `material-ui`, `ethers.js`, and `web3-react` for its frontend.
- Uniswap V2 pools allow for three primary transaction types: swapping assets, adding liquidity, and removing liquidity. 

### Task

1) Build a simple web application using [React](https://reactjs.org/) and [`material-ui`](https://mui.com/) (either V4 or V5) that monitors the `USDC-ETH` pool on Uniswap V2. Namely, the web application should display *live* updates of the three primary transaction types in a table. The data should be retrieved through a connected user's wallet (e.g. through Metamask).

2) Create a custom theme for `material-ui` which imports a [Google Font](https://fonts.google.com/).

3) Host the web application on [surge.sh](https://surge.sh/) (free).

4) Submit a pull request with your source code to this repository and include your hosted URL.

> ***Please don't publish this coding challenge or your solution. We're hoping to avoid plagiarism in the future. Thank you!***


## Hints & Suggestions

- The only requirement is that you use React and `material-ui`. You can choose the remaining tools (e.g. `ethers.js` vs. `web3.js`).
- You *must* retrieve the data directly from the Ethereum network (i.e. not using services like Etherscan).

> ***Let us know if you need any clarifications. If you're not able to complete the entire challenge, please submit a partial solution. Best of luck!***

