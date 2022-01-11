import styled, { css } from 'styled-components';
import StyledProjectImg from './ProjectImg';
import CategoryTitle from '../CategoryTitle';
import ProjectTitle from './ProjectTitle';
import { StyledParagraph } from '../Paragraph';
import device from '../../assets/data/deviceSizes';
import StyledEmphasisText from '../EmphasisText';

const TitleContainer = ({ className, category, title }) => {
  return (
    <div className={className}>
      <CategoryTitle>{category}</CategoryTitle>
      <ProjectTitle>{title}</ProjectTitle>
    </div>
  );
};

const StyledTitleContainer = styled(TitleContainer)`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 5px;
`;

const ContentContainer = styled.div`
  ${(props) =>
    props.important &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media ${device.laptop} {
        display: block;
        text-align: initial;
      }
    `}
`;

const SmallProject = ({
  className,
  src,
  alt,
  category,
  title,
  textContent,
  important,
  canHover,
}) => {
  return (
    <article className={className}>
      <StyledProjectImg src={src} alt={alt} />
      <ContentContainer important={important}>
        <StyledTitleContainer category={category} title={title} />
        <StyledParagraph regular>{textContent}</StyledParagraph>
        <StyledEmphasisText>
          {important === true ? 'Coming Soon' : 'View Details'}
        </StyledEmphasisText>
      </ContentContainer>
    </article>
  );
};

const StyledSmallProject = styled(SmallProject)`
  flex: 1 0 35%;
  margin: 20px 0;
  width: 900px;
  pointer-events: none;

  @media ${device.laptop} {
    width: initial;
    max-width: 1024px;
    margin: 50px 0;
  }

  ${(props) =>
    props.canHover &&
    css`
      pointer-events: auto;
    `}
`;

export default StyledSmallProject;
