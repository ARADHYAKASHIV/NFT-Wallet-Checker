import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const FloatingButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 80px; /* Adjust position for mobile */
    right: 20px; /* Adjust position for mobile */
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
  }
`;

const MainButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border: none;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  position: relative;
  overflow: hidden;
  animation: ${pulse} 2s infinite;

  svg {
    transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
    animation: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 50px; /* Smaller button size for mobile media query */
    height: 50px; /* Smaller button size for mobile */
    font-size: 20px; /* Adjust font size for mobile */
  }
`;

const MenuIcon = styled.svg`
  line {
    transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    transform-origin: center;
    stroke-width: ${props => props.isOpen ? '3' : '2'};
    
    &:first-child {
      transform: ${props => props.isOpen 
        ? 'translate(0, 0) rotate(45deg)' 
        : 'translate(0, -4px)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: scaleX(${props => props.isOpen ? '0' : '1'});
    }
    
    &:last-child {
      transform: ${props => props.isOpen 
        ? 'translate(0, 0) rotate(-45deg)' 
        : 'translate(0, 4px)'};
    }
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const ContactMenu = styled.div`
  position: absolute;
  bottom: 0;
  right: 80px;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: ${slideIn} 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  transform-origin: center right;
  min-width: 220px;

  @media (max-width: 768px) {
    right: 70px; /* Adjust position for mobile */
    min-width: 180px; /* Adjust minimum width for mobile */
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem;
  color: #4b5563;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s ease;
  margin: 0.3rem 0;
  font-weight: 500;
  position: relative;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: #6366f1;
    transform: translateX(4px);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  margin-right: 16px;
  background: ${props => props.bgColor || 'rgba(99, 102, 241, 0.1)'};
  color: ${props => props.iconColor || '#6366f1'};
  transition: transform 0.2s ease;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }

  ${SocialLink}:hover & {
    transform: scale(1.1) rotate(-8deg);
  }
`;

const SocialText = styled.span`
  margin-left: 4px;
`;

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FloatingButton>
      <MainButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <MenuIcon 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          isOpen={isOpen}
        >
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </MenuIcon>
      </MainButton>

      <ContactMenu isOpen={isOpen}>
            // social links
        <SocialLink href="https://discord.gg/kanjix" target="_blank" rel="noopener noreferrer">
          <IconWrapper bgColor="rgba(88, 101, 242, 0.1)" iconColor="#5865F2">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </IconWrapper>
          <SocialText>Discord</SocialText>
        </SocialLink>

        <SocialLink href="https://x.com/KanjiiX" target="_blank" rel="noopener noreferrer">
          <IconWrapper bgColor="rgba(29, 161, 242, 0.1)" iconColor="">
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" fill="rgb(88, 101, 242)"/></svg>
          </IconWrapper>
          <SocialText>Twitter</SocialText>
        </SocialLink>
      </ContactMenu>
    </FloatingButton>
  );
};

export default ContactButton;
