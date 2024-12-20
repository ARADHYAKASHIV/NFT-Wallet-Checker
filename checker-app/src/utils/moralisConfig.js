const MORALIS_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjAwNGY0ODJkLTEwMWYtNDYwZC04ZjM1LTRiODkwNDNkYmI3MSIsIm9yZ0lkIjoiNDIxODU3IiwidXNlcklkIjoiNDMzODYxIiwidHlwZUlkIjoiMzZmZDUwZjctMmQxYy00NWRhLWIwNjgtOGYzNmI5Mzc0ODM4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzQ3MTQyNTQsImV4cCI6NDg5MDQ3NDI1NH0.bTZppHMIhnKJ59AxujnidCXzrp7MuFNrCVgLre0FLeQ";
const MORALIS_API_URL = 'https://deep-index.moralis.io/api/v2';

export const checkWhitelist = async (walletAddress) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-Key': MORALIS_API_KEY
      }
    };

    // Get NFT holdings and token balances
    const [nftResponse, tokenResponse] = await Promise.all([
      fetch(`${MORALIS_API_URL}/${walletAddress}/nft?chain=eth&format=decimal`, options),
      fetch(`${MORALIS_API_URL}/${walletAddress}/erc20?chain=eth`, options)
    ]);

    const nftData = await nftResponse.json();
    const tokenData = await tokenResponse.json();

    // You can customize these criteria based on your requirements
    const hasNFTs = nftData.result && nftData.result.length > 0;
    const hasTokens = tokenData.length > 0;

    return {
      isWhitelisted: hasNFTs || hasTokens,
      details: {
        nftCount: nftData.result ? nftData.result.length : 0,
        tokenCount: tokenData.length,
        lastChecked: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error('Moralis API Error:', error);
    throw new Error('Failed to check wallet status');
  }
}; 