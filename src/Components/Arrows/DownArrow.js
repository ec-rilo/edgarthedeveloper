import styled from 'styled-components';
import device from '../../assets/data/deviceSizes';
import arrowHeadSrc from './down-arrow-head.png';

const ArrowBody = styled.div`
  background-color: var(--clr-gainsboro);
  height: 18px;
  width: 1px;
`;

const ArrowHead = styled.img`
  position: absolute;
  display: block;
  width: 15px;
  height: 15px;
  object-fit: contain;
  bottom: -3px;
`;

const DownArrow = ({ className }) => {
  return (
    <div className={className}>
      <ArrowBody />
      <ArrowHead src={arrowHeadSrc} alt="" />
    </div>
  );
};

const StyledDownArrow = styled(DownArrow)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-family: var(--fnt-bld);
  @media ${device.tablet};
`;

const DownArrowContainer = ({ className }) => {
  return (
    <div className={className}>
      <Text>Scroll Down</Text>
      <StyledDownArrow />
    </div>
  );
};

const StyledDownArrowContainer = styled(DownArrowContainer)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
  width: 110px;
  margin: 50px 0;
`;

export { StyledDownArrowContainer };
