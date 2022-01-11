import { useState } from 'react';
import styled, { css } from 'styled-components';
import device from '../../assets/data/deviceSizes';
import StyledRightArrow from '../Arrows/RightArrow';

const Img = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const DarkOverlay = styled.div`
  position: absolute;
  background-color: var(--clr-onyx);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 250ms ease-in-out;

  ${(props) => {
    if (props.isActive === true) {
      return `opacity: 1;`;
    }
  }}
`;

const CenteredText = styled.p`
  color: var(--clr-gainsboro);
  font-family: var(--fnt-regular);
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const CenteredContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 30px;
  flex-direction: row;
  opacity: 0;
  transform: translateY(-400%);
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;

  ${(props) => {
    if (props.isActive === true) {
      return `
      opacity: 1;
      transform: translateY(0);
      `;
    }
  }}
`;

const SelectedImgOverlay = ({ className }) => {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    isActive === true ? setActive(false) : setActive(true);
  };

  return (
    <div
      className={className}
      onMouseEnter={() => toggleActive()}
      onMouseLeave={() => toggleActive()}
    >
      <DarkOverlay isActive={isActive} />
      <CenteredContainer isActive={isActive}>
        <CenteredText>View Project</CenteredText>
        <StyledRightArrow />
      </CenteredContainer>
    </div>
  );
};

const StyledSelectedImgOverlay = styled(SelectedImgOverlay)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ProjectImg = ({ className, src, alt, canHover }) => {
  return (
    <div className={className}>
      <StyledSelectedImgOverlay />
      <Img src={src} alt={alt} />
    </div>
  );
};

const StyledProjectImg = styled(ProjectImg)`
  position: relative;
  background-color: var(--clr-gainsboro);
  height: 400px;
  cursor: pointer;
  pointer-events: none;

  ${(props) =>
    props.canHover &&
    css`
      pointer-events: auto;
    `}

  @media ${device.laptop} {
    height: 250px;
  }

  @media ${device.tablet} {
    height: 250px;
  }
`;

export default StyledProjectImg;
