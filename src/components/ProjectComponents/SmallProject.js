import styled from 'styled-components';
import StyledProjectImg from '../ProjectImg';
import CategoryTitle from '../CategoryTitle';
import ProjectTitle from '../ProjectTitle';
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

const SmallProject = ({
  className,
  src,
  alt,
  category,
  title,
  textContent,
}) => {
  return (
    <article className={className}>
      <StyledProjectImg src={src} alt={alt} />
      <StyledTitleContainer category={category} title={title} />
      <StyledParagraph regular>{textContent}</StyledParagraph>
      <StyledEmphasisText>View Details</StyledEmphasisText>
    </article>
  );
};

const StyledSmallProject = styled(SmallProject)`
  flex: 1 0 35%;
  margin: 20px 0;
  width: 900px;

  @media ${device.laptop} {
    width: initial;
    max-width: 1024px;
    margin: 50px 0;
  }
`;

export default StyledSmallProject;
