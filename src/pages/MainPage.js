import { Container } from '../components/Container';
import HomePage from './HomePage';
import StyledSkillsPage from './SkillsPage';

const MainPage = () => {
  return (
    <Container>
      <article>
        <HomePage />
        <StyledSkillsPage />
      </article>
    </Container>
  );
};

export default MainPage;
