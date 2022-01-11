import styled, { css } from 'styled-components';

const StyledWord = styled.span`
  font-family: var(--fnt-regular);
  color: var(--clr-amber);
`;

const StyledParagraph = styled.p`
  font-family: var(--fnt-regular);
  color: var(--clr-gainsboro);
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.5;

  ${(props) =>
    props.regular &&
    css`
      font-size: 1rem;
    `}
`;

export { StyledWord, StyledParagraph };
