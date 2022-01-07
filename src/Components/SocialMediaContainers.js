import styled, { css } from 'styled-components';
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

const Icon = ({ className, src, alt, hyperLink }) => {
  return (
    <a href={hyperLink} target={'_blank'} rel="noopener noreferrer">
      <img className={className} src={src} alt={alt} />
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
  return (
    <div className={className}>
      <StyledIcon
        src={githubIcon}
        alt="Github"
        hyperLink={'https://github.com/ec-rilo'}
      ></StyledIcon>
      <StyledIcon
        src={linkedinIcon}
        alt="Linkedin"
        hyperLink={'https://www.linkedin.com/in/ecarrillo046/'}
      ></StyledIcon>
      <StyledIcon
        src={devIcon}
        alt="Dev.to"
        hyperLink={'https://dev.to/ec_rilo'}
        target={'_blank'}
      ></StyledIcon>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 700px;

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
