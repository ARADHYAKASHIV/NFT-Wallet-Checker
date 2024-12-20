import styled from 'styled-components';

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
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
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

const Label = styled.span`
  font-weight: 600;
  color: #6b7280;
  min-width: 120px;
`;

const Value = styled.span`
  color: #e5e7eb;
  flex: 1;
  
  &.highlight {
    color: ${props => props.status === 'Whitelisted' ? '#34d399' : '#ef4444'};
    font-weight: 600;
  }
`;

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <ResultContainer>
      <ResultItem>
        <Label>Wallet:</Label>
        <Value>{result.walletAddress}</Value>
      </ResultItem>
      <ResultItem>
        <Label>Status:</Label>
        <Value className="highlight" status={result.status}>
          {result.status}
        </Value>
      </ResultItem>
      <ResultItem>
        <Label>NFTs Owned:</Label>
        <Value>{result.nftCount}</Value>
      </ResultItem>
      <ResultItem>
        <Label>Tokens Owned:</Label>
        <Value>{result.tokenCount}</Value>
      </ResultItem>
      <ResultItem>
        <Label>Checked at:</Label>
        <Value>{new Date(result.timestamp).toLocaleString()}</Value>
      </ResultItem>
    </ResultContainer>
  );
};

export default ResultDisplay;