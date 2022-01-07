import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    left: -100px;
  }

  100% {
    opacity: 1;
    left: 0;
  }
`;

const TextAnimateImg = styled.img`
  opacity: 1;
  transition: opacity 0.2s;
  cursor: pointer;

  ${({ content, index }) => {
    if (content[index].isActive === false) {
      return `
      opacity: .2;  
    `;
    }
  }}
`;

const TextAnimateLi = styled.li`
  color: var(--clr-gainsboro);
  transition: color 0.2s;
  cursor: pointer;

  ${({ content, index }) => {
    if (content[index].isActive === false) {
      return `
      color: var(--clr-gainsboro-light);  
    `;
    }
  }}
`;

const useTextAnimate = (data) => {
  const [content, setContent] = useState(data);

  const setOneActive = (name) => {
    let contentCopy = [...content];

    contentCopy.forEach((item, index, arr) => {
      if (arr[index].name !== name) {
        arr[index].isActive = false;
      }
    });

    setContent(contentCopy);
  };

  const setAllActive = () => {
    let contentCopy = [...content];

    contentCopy.forEach((item, index, arr) => {
      arr[index].isActive = true;
    });

    setContent(contentCopy);
  };

  return { setOneActive, setAllActive, content };
};

export { useTextAnimate, TextAnimateLi, TextAnimateImg, fadeInFromLeft };
