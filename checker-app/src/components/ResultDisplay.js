import React from 'react';
import styled from 'styled-components';
import { FaWallet, FaCheckCircle, FaTimesCircle, FaClipboardList } from 'react-icons/fa';

const ResultContainer = styled.div`
  max-width: 800px;
  margin: 1.5rem auto;
  padding: 1rem; /* Reduced padding for compactness */
  background: rgba(17, 24, 39, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
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

  @media (max-width: 768px) {
    padding: 0.5rem; /* Further reduce padding for mobile */
    margin: 0.5rem; /* Adjust margin for mobile */
  }
`;

const ResultItem = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem; /* Reduced padding for compactness */
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on mobile */
    align-items: flex-start; /* Align items to the start */
    padding: 0.3rem; /* Reduce padding for mobile */
  }
`;

const Label = styled.span`
  font-weight: 600;
  color: #e5e7eb;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem; /* Smaller font size for compactness */

  @media (max-width: 768px) {
    font-size: 0.75rem; /* Further reduce font size on mobile */
  }
`;

const Value = styled.span`
  color: #fbbf24; /* Gold color for values */
  font-weight: 600;
  font-size: 0.9rem; /* Smaller font size for compactness */

  @media (max-width: 768px) {
    font-size: 0.75rem; /* Further reduce font size on mobile */
  }
`;

const Status = styled.span`
  color: ${props => props.status === 'Whitelisted' ? '#34d399' : '#ef4444'};
  font-weight: 600;
  font-size: 0.9rem; /* Smaller font size for compactness */

  @media (max-width: 768px) {
    font-size: 0.75rem; /* Further reduce font size on mobile */
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust icon size for mobile */
  }
`;

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <ResultContainer>
      <ResultItem>
        <Label>
          <IconWrapper><FaWallet /></IconWrapper>
          Wallet:
        </Label>
        <Value>{result.walletAddress}</Value>
      </ResultItem>
      <ResultItem>
        <Label>
          <IconWrapper>{result.status === 'Whitelisted' ? <FaCheckCircle /> : <FaTimesCircle />}</IconWrapper>
          Status:
        </Label>
        <Status status={result.status}>{result.status}</Status>
      </ResultItem>
      {/* Uncomment if needed
      <ResultItem>
        <Label>
          <IconWrapper><FaClipboardList /></IconWrapper>
          NFTs Owned:
        </Label>
        <Value>{result.nftCount}</Value>
      </ResultItem>
      <ResultItem>
        <Label>
          <IconWrapper><FaClipboardList /></IconWrapper>
          Tokens Owned:
        </Label>
        <Value>{result.tokenCount}</Value>
      </ResultItem>
      */}
    </ResultContainer>
  );
};

export default ResultDisplay;