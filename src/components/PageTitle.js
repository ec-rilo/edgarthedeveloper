import styled from 'styled-components';
import device from '../assets/data/deviceSizes';

const PageTitle = styled.h2`
  font-size: 3rem;
  color: var(--clr-gainsboro);
  font-family: var(--fnt-bld);
  margin: 30px 0;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`;

export default PageTitle;
