import { useState } from 'react';
import Header from './components/Header';
import CheckerForm from './components/CheckerForm';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import GlobalStyles from './styles/GlobalStyles';
import { getAlchemyInstance } from './utils/alchemyConfig';
import { checkWhitelist } from './utils/whitelistConfig';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async ({ walletAddress, network }) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if wallet is whitelisted
      const isWhitelisted = checkWhitelist(walletAddress, network);
      
      const alchemy = getAlchemyInstance(network);
      
      // Get NFTs for the wallet
      const nftsResponse = await alchemy.nft.getNftsForOwner(walletAddress);
      
      // Format the NFTs data
      const nfts = await Promise.all(nftsResponse.ownedNfts.map(async (nft) => {
        return {
          name: nft.title || 'Unnamed NFT',
          collection: nft.contract.name || 'Unknown Collection',
          tokenId: nft.tokenId,
          image: nft.media[0]?.gateway || 'https://via.placeholder.com/200?text=No+Image',
          description: nft.description,
          contractAddress: nft.contract.address,
          tokenType: nft.tokenType,
          timeLastUpdated: nft.timeLastUpdated,
        };
      }));

      setResult({
        walletAddress,
        network,
        nfts,
        totalCount: nftsResponse.totalCount,
        isWhitelisted,
      });
    } catch (err) {
      setError(err.message || 'Failed to fetch NFTs');
      console.error('Error fetching NFTs:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <CheckerForm onSubmit={handleCheck} />
        {error && (
          <div style={{ 
            maxWidth: '800px', 
            margin: '1rem auto', 
            padding: '1rem', 
            background: 'rgba(239, 68, 68, 0.15)', 
            color: '#ef4444',
            borderRadius: '12px',
            textAlign: 'center' 
          }}>
            {error}
          </div>
        )}
        {loading ? (
          <div style={{ 
            maxWidth: '800px', 
            margin: '2rem auto', 
            textAlign: 'center',
            color: '#6366f1' 
          }}>
            Loading NFTs...
          </div>
        ) : (
          <ResultDisplay result={result} />
        )}
      </main>
      <ContactButton />
      <Footer />
    </>
  );
}

export default App;