import styled, { css } from 'styled-components';
import { fadeIn } from '../assets/Animate';
import device from '../assets/data/deviceSizes';

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const VertImg = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <StyledImg className={className} src={src} alt={alt} />
    </div>
  );
};

const StyledVertImgContainer = styled(VertImg)`
  display: block;
  height: 100%;

  ${(props) =>
    props.animated &&
    css`
      animation: ${fadeIn} 1s;
    `}

  @media ${device.tablet} {
    margin: 50px 0;
    height: 300px;
    max-width: 1440px;
    width: 100%;
  }
`;

export { StyledVertImgContainer };
