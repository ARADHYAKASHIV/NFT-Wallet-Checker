import { ethers } from 'ethers';

const WHITELIST_CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';
const WHITELIST_ABI = [
  'function isWhitelisted(address wallet) view returns (bool)',
  // Add other relevant functions
];

export const checkWhitelist = async (walletAddress) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider('YOUR_RPC_URL');
    const contract = new ethers.Contract(
      WHITELIST_CONTRACT_ADDRESS,
      WHITELIST_ABI,
      provider
    );
    
    const isWhitelisted = await contract.isWhitelisted(walletAddress);
    return isWhitelisted;
  } catch (error) {
    console.error('Error checking whitelist:', error);
    throw error;
  }
}; 