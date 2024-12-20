import { useState } from 'react';
import Header from './components/Header';
import CheckerForm from './components/CheckerForm';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import GlobalStyles from './styles/GlobalStyles';
import { checkWhitelist } from './utils/moralisConfig';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async ({ walletAddress }) => {
    try {
      setLoading(true);
      setError(null);
      
      // Basic validation
      if (!walletAddress || !walletAddress.startsWith('0x') || walletAddress.length !== 42) {
        throw new Error('Invalid wallet address format');
      }

      // Check whitelist status using Moralis
      const whitelistStatus = await checkWhitelist(walletAddress);
      
      setResult({
        walletAddress,
        status: whitelistStatus.isWhitelisted ? 'Whitelisted' : 'Not Whitelisted',
        nftCount: whitelistStatus.details.nftCount,
        tokenCount: whitelistStatus.details.tokenCount,
        timestamp: whitelistStatus.details.lastChecked
      });
      
    } catch (err) {
      setError(err.message || 'Failed to check wallet');
      console.error('Error:', err);
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
            Checking wallet...
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