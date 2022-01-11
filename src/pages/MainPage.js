import { Container } from '../components/Container';
import HomePage from './HomePage';
import StyledProjectsPage from './ProjectsPage';
import StyledSkillsPage from './SkillsPage';

const MainPage = () => {
  return (
    <Container>
      <article>
        <HomePage />
        <StyledSkillsPage />
        <StyledProjectsPage />
      </article>
    </Container>
  );
};

export default MainPage;
