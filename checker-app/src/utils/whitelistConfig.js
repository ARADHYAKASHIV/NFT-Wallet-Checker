// Example whitelist of wallets
export const whitelistedWallets = {
  ethereum: [
    'GG916FiwSnryreHBHa68RaUPA5fTLutapwAMrCYkC9G', // Replace with actual whitelisted addresses
    '0x456...',
  ],
  polygon: [
    '0x789...',
    '0xabc...',
  ],
};

export const checkWhitelist = (address, network) => {
  const networkWallets = whitelistedWallets[network] || [];
  return networkWallets.includes(address.toLowerCase());
}; 