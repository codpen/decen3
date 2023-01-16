import detectEthereumProvider from "@metamask/detect-provider";
import { useWeb3React } from "@web3-react/core";
import { ethers, Contract } from "ethers";
import StakingHelperContractAbi from "../../abi/StakingHelperContract.json";
import StakingContract from "../../abi/D3StakingContract.json";

export const stakingHelper = async () => {
  let provider = await detectEthereumProvider();
  await provider.request({ method: "eth_requestAccounts" });
  const networkId = await provider.request({ method: "net_version" });
  provider = new ethers.providers.Web3Provider(provider);
  const signer = provider.getSigner();
  if (provider) {
    const stakingHelper = new Contract(
      "0x7c62604FB3c0bb7Bdc00b681960202D6efc4AecB",
      StakingHelperContractAbi,
      signer
    );

    return stakingHelper;
  }
};

export const staking = async () => {
  let provider = await detectEthereumProvider();
  await provider.request({ method: "eth_requestAccounts" });
  const networkId = await provider.request({ method: "net_version" });
  provider = new ethers.providers.Web3Provider(provider);
  const signer = provider.getSigner();
  if (provider) {
    const staking = new Contract(
      "0x7c62604FB3c0bb7Bdc00b681960202D6efc4AecB",
      StakingContract,
      signer
    );

    return staking;
  }
};
