import styled from 'styled-components';
import device from '../../assets/data/deviceSizes';

const Img = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const ProjectImg = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <Img src={src} alt={alt} />
    </div>
  );
};

const StyledProjectImg = styled(ProjectImg)`
  background-color: var(--clr-gainsboro);
  height: 400px;
  @media ${device.laptop} {
    height: 250px;
  }

  @media ${device.tablet} {
    height: 250px;
  }
`;

export default StyledProjectImg;
