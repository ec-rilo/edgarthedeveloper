import styled from 'styled-components';
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

  background-color: red;
  height: 100%;

  @media ${device.laptop} {
    margin: 50px 0;
    height: 300px;
    max-width: 1440px;
    width: 100%;
  }
`;

export { StyledVertImgContainer };
