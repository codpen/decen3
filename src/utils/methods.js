import { stakingHelper, staking } from "./contract/contract";

export const stake = async (address) => {
  const method = await stakingHelper();
  console.log(method);
  const tx = await method.stake("10000000000");
};

export const unstake = async () => {
  const method = await staking();
  const tx = await method.unstake("100000000", true);
};
