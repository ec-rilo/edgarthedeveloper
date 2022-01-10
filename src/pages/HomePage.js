import StyledNavContainer from '../components/NavBar';
import { Container, SubContainer } from '../components/Container';
import StyledIntroContainer from '../components/Intro';

const HomePage = () => {
  return (
    <section>
      <Container>
        <SubContainer>
          <StyledNavContainer />
          <StyledIntroContainer />
        </SubContainer>
      </Container>
    </section>
  );
};

export default HomePage;
