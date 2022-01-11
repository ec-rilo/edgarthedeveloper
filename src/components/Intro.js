import styled from 'styled-components';
import { StyledWord, StyledParagraph } from './Paragraph';
import {
  textCarouselStyles,
  useTextCarousel,
  textCarouselLogic,
  textCarouselContainerStyles,
} from '../assets/Animate';
import device from '../assets/data/deviceSizes';
import { StyledArticle } from './Article';
import imgSrc from '../assets/images/decorative/person-in-the-woods.jpeg';
import { StyledVertImgContainer } from './Img';
import { StyledSocialMediaContainer1 } from './SocialMediaContainers';
import { StyledDownArrowContainer } from './Arrows/DownArrow';
import { Link as ScrollLink } from 'react-scroll';

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

const TextContainer = ({ className }) => {
  return (
    <section className={className}>
      <StyledSocialMediaContainer1 homepage spaced />
      <StyledDynamicTitleContainer />
      <StyledTitle>Edgar Carrillo</StyledTitle>
      <StyledArticle>
        <StyledParagraph>
          Hey there! My name is Edgar. I’m a Humboldt County, CA based{' '}
          <StyledWord>Front End Developer</StyledWord>.
        </StyledParagraph>
        <StyledParagraph>
          I've had a passion for solving problems and design since I was young
          and when I started tinkering with html / css I was interested, once I
          jumped into the logic side I was hooked.
        </StyledParagraph>
      </StyledArticle>
      <ScrollLink to="skills-page" smooth={true} duration={1000}>
        <StyledDownArrowContainer />
      </ScrollLink>
    </section>
  );
};

const StyledTextContainer = styled(TextContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  flex: 1;
  @media ${device.tablet} {
    margin-left: 0;
  }
`;

const IntroContainer = ({ className }) => {
  return (
    <section className={className}>
      <StyledTextContainer />
      <div style={{ flex: '1' }}>
        <StyledVertImgContainer
          animated
          src={imgSrc}
          alt="Person walking in long grass, only rear of person is seen"
        />
      </div>
    </section>
  );
};

const StyledIntroContainer = styled(IntroContainer)`
  font-family: var(--fnt-regular);
  color: var(--clr-gainsboro);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 900px;

  @media ${device.tablet} {
    height: initial;
    flex-direction: column;
    justify-content: center;
  }
`;

const IntroMasterContainer = ({ className }) => {
  return (
    <div className={className}>
      <StyledIntroContainer />
    </div>
  );
};

const StyledIntroMasterContainer = styled(IntroMasterContainer)`
  height: calc(100vh - 100px);

  @media ${device.laptop} {
    height: initial;
  }
`;

export default StyledIntroMasterContainer;
