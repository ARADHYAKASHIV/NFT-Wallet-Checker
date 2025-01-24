import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(17, 24, 39, 0.98);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4);
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

const Divider = styled.span`
  color: #4b5563;
  padding: 0 0.5rem;
`;

const CreditText = styled.span`
  color: #6b7280;
  font-weight: 500;
`;

const Name = styled.span`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0.5rem;
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <span>© 2024 NFT Wallet Checker</span>
        <Divider>|</Divider>
        
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;