import styled, { css } from 'styled-components';
import {
  fadeInFromLeft,
  TextAnimateImg,
  useTextAnimate,
} from '../assets/Animate';
import githubIcon from '../assets/images/icons/GitHub-Mark/PNG/github-icon.png';
import linkedinIcon from '../assets/images/icons/linkedin-icon.png';
import devIcon from '../assets/images/icons/dev-icon.png';
import device from '../assets/data/deviceSizes';

const StyledLine = styled.div`
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 100%;
  min-width: 80px;
`;

const Icon = (props) => {
  return (
    <a href={props.hyperLink} target={'_blank'} rel="noopener noreferrer">
      <TextAnimateImg
        className={props.className}
        src={props.src}
        alt={props.alt}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        content={props.content}
        index={props.index}
      />
    </a>
  );
};

const StyledIcon = styled(Icon)`
  display: block;
  width: 40px;
  height: 40px;

  @media ${device.tablet} {
    height: 30px;
    width: 30px;
  }

  @media ${device.mobileM} {
    height: 25px;
    width: 25px;
  }
`;

const IconContainer = ({ className }) => {
  const data = useTextAnimate([
    {
      name: 'Github',
      isActive: true,
      hyperLink: 'https://github.com/ec-rilo',
      src: githubIcon,
    },
    {
      name: 'Linkedin',
      isActive: true,
      hyperLink: 'https://www.linkedin.com/in/ecarrillo046/',
      src: linkedinIcon,
    },
    {
      name: 'dev.to',
      isActive: true,
      hyperLink: 'https://dev.to/ec_rilo',
      src: devIcon,
    },
  ]);

  return (
    <div className={className}>
      {data.content.map((item, index) => {
        return (
          <StyledIcon
            key={index}
            src={item.src}
            alt={item.name}
            hyperLink={item.hyperLink}
            onMouseEnter={() => data.setOneActive(item.name)}
            onMouseLeave={() => data.setAllActive()}
            content={data.content}
            index={index}
          />
        );
      })}
    </div>
  );
};

const StyledIconContainer = styled(IconContainer)`
  display: flex;
  padding: 0 50px;
  gap: 50px;

  @media ${device.tablet} {
    gap: 30px;
    padding: 0 30px;
  }

  @media ${device.mobileM} {
    gap: 20px;
    padding: 0 20px;
  }
`;

const StyledSubContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
`;

const SocialMediaContainer1 = ({ className }) => {
  return (
    <div className={className}>
      <StyledSubContainer>
        <StyledLine />
        <StyledIconContainer />
      </StyledSubContainer>
    </div>
  );
};

const StyledSocialMediaContainer1 = styled(SocialMediaContainer1)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 700px;
  animation: ${fadeInFromLeft} 1s;

  @media ${device.tablet} {
    max-width: 400px;
  }

  ${(props) =>
    props.homepage &&
    css`
      margin-top: 50px;
    `}
`;

export { StyledSocialMediaContainer1 };
