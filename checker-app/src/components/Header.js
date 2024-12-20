import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(17, 24, 39, 0.98);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
`;

const NavBar = styled.nav`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    width: 32px;
    height: 32px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <Logo>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 8h-1V6c0-2.76-2.24-5-5-5H7C4.24 1 2 3.24 2 6v12c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5v-2h1c1.66 0 3-1.34 3-3v-2c0-1.66-1.34-3-3-3zm-3 10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V6c0-1.65 1.35-3 3-3h6c1.65 0 3 1.35 3 3v2H8c-1.66 0-3 1.34-3 3v2c0 1.66 1.34 3 3 3h8v2zm4-5c0 .55-.45 1-1 1h-1v-4h1c.55 0 1 .45 1 1v2z"
              fill="url(#header-gradient)"
            />
            <path
              d="M8 12c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
              fill="url(#header-gradient)"
            />
            <path
              d="M12.5 11h-2c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5z"
              fill="url(#header-gradient)"
            />
            <defs>
              <linearGradient
                id="header-gradient"
                x1="2"
                y1="1"
                x2="22"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          NFT Wallet Checker
        </Logo>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;