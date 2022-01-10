import { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
/* Animations */
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

/* Text Carousel Hook, Styles, and animations */
const carouselAnimEntering = keyframes`
  0% {
    opacity: 0;
    left: -100%;
  }

  100% {
    opacity: 1;
    left: 0;
  }
`;

const carouselAnimExiting = keyframes`
  0% {
    opacity: 1;
    left: 0;
  }

  100% {
    opacity: 0;
    left: 100%; 
  }
`;

const textCarouselStyles = `position: absolute; left: -100%; `;
const textCarouselLogic = ({ data }) => {
  // if the current element is active
  // give it a left of 0

  if (data.isInitial === true) {
    return `
      left: -100%;
      opacity: 0;
    `;
  } else if (data.isEntering === true) {
    return css`
      animation: ${carouselAnimEntering} 1s forwards;
    `;
  } else if (data.isExiting === true) {
    return css`
      opacity: 0;
      animation: ${carouselAnimExiting} 1s forwards;
    `;
  }
};

const textCarouselContainerStyles = `position: relative;`;

const useTextCarousel = (data) => {
  const [content, setContent] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      let contentCopy = [...content];

      for (let i = 0; i < contentCopy.length; ++i) {
        if (contentCopy[i].isEntering === true) {
          contentCopy[i].isExiting = true;
          contentCopy[i].isEntering = false;

          if (i === contentCopy.length - 1) {
            contentCopy[0].isEntering = true;
            contentCopy[0].isInitial = false;
          } else {
            contentCopy[i + 1].isEntering = true;
            contentCopy[i + 1].isInitial = false;
          }

          for (let j = 0; j < contentCopy.length; ++j) {
            if (
              contentCopy[j] !== contentCopy[i] &&
              contentCopy[j].isExiting === true
            ) {
              contentCopy[j].isExiting = false;
            }

            if (
              contentCopy[j].isEntering === false &&
              contentCopy[j].isExiting === false
            ) {
              contentCopy[j].isInitial = true;
            }
          }
          break;
        }
      }

      setContent(contentCopy);
    }, 2500);

    return () => clearInterval(interval);
  });

  return { content };
};

/* Text Animate Hook*/
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

export {
  useTextAnimate,
  TextAnimateLi,
  TextAnimateImg,
  fadeInFromLeft,
  textCarouselStyles,
  useTextCarousel,
  textCarouselLogic,
  textCarouselContainerStyles,
  fadeIn,
};
