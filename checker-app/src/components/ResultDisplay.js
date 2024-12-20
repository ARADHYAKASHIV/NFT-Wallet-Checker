import styled from 'styled-components';
import { checkWhitelist } from '../utils/whitelistConfig';

const ResultContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.03);
  animation: fadeIn 0.5s ease-out;
  
  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
      backdrop-filter: blur(0px);
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
      backdrop-filter: blur(10px);
    }
  }
`;

const ResultItem = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const StatusBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  background: ${props => props.available ? 'rgba(52, 211, 153, 0.15)' : 'rgba(239, 68, 68, 0.15)'};
  color: ${props => props.available ? '#34d399' : '#ef4444'};
  backdrop-filter: blur(4px);
`;

const Label = styled.span`
  font-weight: 600;
  color: #6b7280;
  min-width: 100px;
`;

const Value = styled.span`
  color: #e5e7eb;
  flex: 1;
`;

const NFTGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const NFTCard = styled.div`
  background: rgba(3, 7, 18, 0.95);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
`;

const NFTInfo = styled.div`
  h3 {
    color: #e5e7eb;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ViewButton = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  border-radius: 6px;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
  }
`;

const WhitelistBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  background: ${props => props.isWhitelisted ? 'rgba(52, 211, 153, 0.15)' : 'rgba(239, 68, 68, 0.15)'};
  color: ${props => props.isWhitelisted ? '#34d399' : '#ef4444'};
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  const isWhitelisted = checkWhitelist(result.walletAddress, result.network);

  const getOpenSeaUrl = (contractAddress, tokenId, network) => {
    const baseUrl = network === 'polygon' 
      ? 'https://opensea.io/assets/matic'
      : 'https://opensea.io/assets/ethereum';
    return `${baseUrl}/${contractAddress}/${tokenId}`;
  };

  return (
    <ResultContainer>
      <ResultItem>
        <Label>Wallet:</Label>
        <Value>{result.walletAddress}</Value>
      </ResultItem>
      <ResultItem>
        <Label>Network:</Label>
        <Value>{result.network}</Value>
      </ResultItem>
      <ResultItem>
        <Label>Whitelist Status:</Label>
        <WhitelistBadge isWhitelisted={isWhitelisted}>
          {isWhitelisted ? (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Whitelisted
            </>
          ) : (
            <>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              Not Whitelisted
            </>
          )}
        </WhitelistBadge>
      </ResultItem>
      <ResultItem>
        <Label>Total NFTs:</Label>
        <Value>{result.totalCount || result.nfts?.length || 0}</Value>
      </ResultItem>
      
      <NFTGrid>
        {result.nfts?.map((nft, index) => (
          <NFTCard key={index}>
            <img src={nft.image} alt={nft.name} />
            <NFTInfo>
              <h3>{nft.name}</h3>
              <p>Collection: {nft.collection}</p>
              <p>Token ID: {nft.tokenId}</p>
              <ViewButton 
                href={getOpenSeaUrl(nft.contractAddress, nft.tokenId, result.network)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on OpenSea
              </ViewButton>
            </NFTInfo>
          </NFTCard>
        ))}
      </NFTGrid>
    </ResultContainer>
  );
};

export default ResultDisplay;