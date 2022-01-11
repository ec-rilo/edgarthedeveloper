import styled from 'styled-components';

const StyledEmphasisText = styled.p`
  display: inline-block;
  color: var(--clr-gainsboro);
  font-family: var(--fnt-dark);
  padding: 5px 0 5px 0;
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 250ms ease-in-out;
  line-height: 2;

  &:after {
    display: block;
    content: ' ';
    border-bottom: 2px solid var(--clr-gainsboro);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out, border 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    border-bottom: 2px solid var(--clr-amber);
  }

  &:hover {
    color: var(--clr-amber);
  }
`;

export default StyledEmphasisText;
