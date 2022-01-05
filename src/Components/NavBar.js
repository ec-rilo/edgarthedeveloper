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

const HamburgerBtn = ({ className, toggleHamBtn, isActive }) => {
  return (
    <div className={className} onClick={() => toggleHamBtn(isActive)}>
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

const HamBtnContainer = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  // create a function called toggle ham btn
  const toggleHamBtn = (val) => {
    val === true ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div className={className}>
      <p>
        {/*If the hamburger button is active, it appears as Menu, else it appears as close*/}
        Menu
      </p>
      <StyledHamburgerBtn toggleHamBtn={toggleHamBtn} isActive={isActive} />
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
