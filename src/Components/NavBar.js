import styled from 'styled-components';
import { useState } from 'react';
import device from '../assets/data/deviceSizes';

const MenuContainer = ({ className }) => {
  return (
    <ul className={className}>
      <li>work</li>
      <li>about</li>
      <li>contact</li>
      <li>cv</li>
    </ul>
  );
};

const StyledMenuContainer = styled(MenuContainer)`
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

const HamLayer = styled.div`
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 100%;
  transition: width 0.2s;

  ${({ isActive }) => {
    if (isActive) {
      return `
      width: 40%;
    `;
    }
  }}
`;

const LongHamLayer = styled.div`
  position: relative;
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 120%;
  transition: width 0.2s;

  ${({ isActive }) => {
    if (isActive) {
      return `
      width: 40%;
    `;
    }
  }}
`;

const HamburgerBtn = ({ className, isActive }) => {
  return (
    <div className={className}>
      <HamLayer isActive={isActive}></HamLayer>
      <LongHamLayer isActive={isActive}></LongHamLayer>
      <HamLayer isActive={isActive}></HamLayer>
    </div>
  );
};

const StyledHamburgerBtn = styled(HamburgerBtn)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 20px;
  direction: rtl;
`;

const MenuBtn = styled.p`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  transition: top 0.2s ease;

  ${({ isActive }) => {
    if (isActive) {
      return 'top: -150%';
    }
  }}
`;

const CloseBtn = styled.p`
  position: absolute;
  top: 200%;
  transition: top 0.2s ease;

  ${({ isActive }) => {
    if (isActive) {
      return `
      top: 50%;
      transform: translate(0, -50%);
    `;
    }
  }}
`;

const HamTextContainer = ({ className, isActive }) => {
  return (
    <div className={className}>
      <MenuBtn isActive={isActive}>Menu</MenuBtn>
      <CloseBtn isActive={isActive}>Close</CloseBtn>
    </div>
  );
};

const StyledHamTextContainer = styled(HamTextContainer)`
  position: relative;
  height: 20px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HamBtnContainer = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  // create a function called toggle ham btn
  const toggleHamBtn = (val) => {
    val === true ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div className={className} onClick={() => toggleHamBtn(isActive)}>
      <StyledHamTextContainer isActive={isActive} />
      <StyledHamburgerBtn isActive={isActive} />
    </div>
  );
};

const StyledHamBtnContainer = styled(HamBtnContainer)`
  display: flex;
  gap: 20px;
  color: var(--clr-gainsboro);
  align-items: center;
`;

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <p>E</p>
    </div>
  );
};

const StyledLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--fnt-regular);
  color: var(--clr-gainsboro);
  width: 40px;
  height: 40px;
  border: 1px solid white;

  @media ${device.mobileS} {
    width: 30px;
    height: 30px;
  }
`;

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <StyledLogo />
      <StyledMenuContainer />
      <StyledHamBtnContainer />
    </nav>
  );
};

const StyledNav = styled(Nav)`
  display: flex;
  align-items: center;
  font-family: var(--fnt-regular);
  height: 100px;

  justify-content: space-between;
`;
export default StyledNav;
