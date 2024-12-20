import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1.5rem;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.03);

  &:hover {
    transform: translateY(-2px);
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(3, 7, 18, 0.95);
  color: #e5e7eb;
  
  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
  }
  
  &::placeholder {
    color: #4b5563;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CheckerForm = ({ onSubmit }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ walletAddress });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="Enter wallet address (0x...)"
          required
        />
        <Button type="submit">Check Wallet</Button>
      </Form>
    </FormContainer>
  );
};

export default CheckerForm;