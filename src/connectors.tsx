import { InjectedConnector } from "@web3-react/injected-connector";

// now we only support ropsten
export const injectedConnector = new InjectedConnector({
  supportedChainIds: [3],
});

 