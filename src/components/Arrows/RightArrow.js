import styled from 'styled-components';
import arrowHeadSrc from './right-arrow-head.png';

const ArrowBody = styled.div`
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 100px;
`;

const ArrowHead = styled.img`
  position: relative;
  right: 11px;
  display: block;
  width: 15px;
  height: 15px;
  object-fit: contain;
`;

const RightArrow = ({ className, bodySize }) => {
  return (
    <div className={className}>
      <ArrowBody bodySize />
      <ArrowHead src={arrowHeadSrc} alt="" />
    </div>
  );
};

const StyledRightArrow = styled(RightArrow)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default StyledRightArrow;
