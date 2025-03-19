import styled from 'styled-components';

// Styled component for the footer container
const FooterContainer = styled.footer`
  position: fixed; /* Sticks the footer to the bottom */
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(17, 24, 39, 0.98); /* Dark background with slight transparency */
  backdrop-filter: blur(10px); /* Blur effect for a glass-like appearance */
  padding: 1rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.03); /* Subtle top border */
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4); /* Soft shadow effect */
`;

// Styled component for the footer content wrapper
const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center; /* Center-aligns items */
  align-items: center;
  gap: 1rem; /* Adds spacing between elements */
  color: #6b7280; /* Neutral gray text color */
  font-size: 0.875rem; /* Small text size */
`;

// Styled component for the divider (separator between text elements)
const Divider = styled.span`
  color: #4b5563; /* Darker gray color */
  padding: 0 0.5rem; /* Adds spacing around the divider */
`;

// Styled component for the credit text
const CreditText = styled.span`
  color: #6b7280;
  font-weight: 500; /* Slightly bold text */
`;

// Styled component for the name with a gradient text effect
const Name = styled.span`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text; /* Applies gradient only to text */
  -webkit-text-fill-color: transparent; /* Makes text transparent to reveal gradient */
  margin-left: 0.5rem;
  position: relative;
  cursor: pointer; /* Adds a pointer cursor on hover */

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    transform: scaleX(0); /* Initially hidden */
    transform-origin: right;
    transition: transform 0.3s ease; /* Smooth transition effect */
  }

  &:hover::after {
    transform: scaleX(1); /* Expands the underline on hover */
    transform-origin: left;
  }
`;

// Styled component for a link element
const Link = styled.a`
  text-decoration: none;
  color: inherit; /* Inherits text color from parent */
`;

// Footer component definition
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <span>© 2024 NFT Wallet Checker</span> {/* Copyright text */}
        <Divider>|</Divider> {/* Vertical separator */}
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
