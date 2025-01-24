import { useState, useEffect } from 'react';
import Header from './components/Header';
import CheckerForm from './components/CheckerForm';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import GlobalStyles from './styles/GlobalStyles';
import { checkWhitelist } from './utils/whitelistConfig';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align the content */
  padding: 0.5rem; /* Add padding around the main content */
`;

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walletAddresses, setWalletAddresses] = useState([]);

  const handleCheck = async ({ walletAddress }) => {
    try {
      setLoading(true);
      setError(null);
      
      // Basic validation
      if (!walletAddress || !walletAddress.startsWith('0x') || walletAddress.length !== 42) {
        throw new Error('Invalid wallet address format');
      }

      console.log(`Input Address: ${walletAddress}`); // Log the input address

      // Check whitelist status using the correct function
      const isWhitelisted = checkWhitelist(walletAddress, 'ethereum');
      console.log(`Checking address: ${walletAddress}, Whitelisted: ${isWhitelisted}`);

      setResult({
        walletAddress,
        status: isWhitelisted ? 'Whitelisted' : 'Not Whitelisted',
        nftCount: 0, // Placeholder, update as needed
        tokenCount: 0, // Placeholder, update as needed
        timestamp: new Date().toISOString() // Placeholder, update as needed
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
      <MainContainer>
        <CheckerForm onSubmit={handleCheck} />
        {error && (
          <div style={{ 
            top: '0',
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
      </MainContainer>
      <ContactButton walletAddresses={walletAddresses} />
      <Footer walletAddresses={walletAddresses} />
    </>
  );
}

export default App;