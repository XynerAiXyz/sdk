import { provider, wallet } from "../config/blockchain.js";
import { ethers } from "ethers";

export const getWalletBalance = async (address) => {
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance);
};

export const sendTransaction = async (to, amount) => {
  const tx = await wallet.sendTransaction({
    to,
    value: ethers.parseEther(amount)
  });

  await tx.wait();
  return tx.hash;
};
