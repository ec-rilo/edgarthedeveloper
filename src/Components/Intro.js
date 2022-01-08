import styled, { css } from 'styled-components';
import {
  textCarouselStyles,
  useTextCarousel,
  textCarouselLogic,
  textCarouselContainerStyles,
} from '../assets/Animate';
import device from '../assets/data/deviceSizes';

const DynamicTitle = styled.p`
  ${textCarouselStyles}
  ${textCarouselLogic}
  color: var(--clr-gainsboro);
  width: 100%;
  font-size: 2.5rem;

  @media ${device.laptopL} {
    font-size: 2rem;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const DynamicTitleContainer = ({ className }) => {
  const titles = useTextCarousel([
    {
      name: 'Software Developer',
      isEntering: true,
      isExiting: false,
      isInitial: false,
    },
    {
      name: 'Web Designer',
      isEntering: false,
      isExiting: false,
      isInitial: true,
    },
    {
      name: 'Problem Solver',
      isEntering: false,
      isExiting: false,
      isInitial: true,
    },
    {
      name: 'Dog Lover',
      isEntering: false,
      isExiting: false,
      isInitial: true,
    },
  ]);

  return (
    <div className={className}>
      {titles.content.map((title, index) => {
        return (
          <DynamicTitle key={index} data={title}>
            {title.name}
          </DynamicTitle>
        );
      })}
    </div>
  );
};

const StyledDynamicTitleContainer = styled(DynamicTitleContainer)`
  ${textCarouselContainerStyles};
  width: 300px;
  height: 50px;

  width: 450px;
  height: 60px;

  @media ${device.tablet} {
    width: 220px;
    height: 30px;
  }
`;

const StyledTitle = styled.h1`
  font-family: var(--fnt-bld);
  font-size: 7rem;

  @media ${device.laptopL} {
    font-size: 5rem;
  }

  @media ${device.tablet} {
    font-size: 4rem;
  }

  @media ${device.mobileL} {
    font-size: 3rem;
  }

  @media ${device.mobileS} {
    font-size: 2.5rem;
  }
`;

const IntroContainer = ({ className }) => {
  return (
    <section className={className}>
      <StyledDynamicTitleContainer />
      <StyledTitle>Edgar Carrillo</StyledTitle>
      {/* <article>
        <p>
          Hey there! My name is Edgar. I’m a Humboldt County, CA based Front End
          Developer. I’m currently studying web development and design.
        </p>
        <p>
          Through the projects I created that required me to use a variety of
          different technologies and layouts I have been able to continously
          raise my standards for what’s exected of any web application.{' '}
        </p>
      </article>
      <div>
        <p>Scroll Down</p>
        <div>
          <div>Arrow body</div>
          <img src="#" alt="arrow img" />
        </div>
      </div> */}
    </section>
  );
};

const StyledIntroContainer = styled(IntroContainer)`
  font-family: var(--fnt-regular);
  color: var(--clr-gainsboro);

  ${(props) =>
    props.homepage &&
    css`
      margin-top: 50px;
      margin-left: 50px;
      @media ${device.tablet} {
        margin-left: 0;
      }
    `}
`;

export default StyledIntroContainer;
