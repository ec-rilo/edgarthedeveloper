import styled from 'styled-components';
import { StyledArticle } from '../components/Article';
import { SubContainer } from '../components/Container';
import PageTitle from '../components/PageTitle';
import { StyledParagraph } from '../components/Paragraph';
import StyledSkillsBanner from '../components/SkillsBanner';

const SkillsPage = ({ className }) => {
  return (
    <SubContainer>
      <article className={className}>
        <PageTitle>My Skills</PageTitle>
        <StyledArticle>
          <StyledParagraph>
            I’ve taken courses that had an emphasis on understanding web
            development technologies as well as the basics of computer science
            concepts. After having pair programmed with many different people
            and applied the web development concepts into many projects you can
            now see my skills reflected on all new projects I’ve created.
          </StyledParagraph>
          <StyledParagraph>
            My favorite skill on this journey has been the endlesss learning.
            Have a job available with tech not shown below? I’m ready.
          </StyledParagraph>
        </StyledArticle>
        <StyledSkillsBanner />
      </article>
    </SubContainer>
  );
};

const StyledSkillsPage = styled(SkillsPage)`
  padding: 12% 0%;
`;

export default StyledSkillsPage;
