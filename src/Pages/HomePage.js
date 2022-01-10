import StyledNavContainer from '../Components/NavBar';
import { Container, SubContainer } from '../Components/Container';
import StyledIntroContainer from '../Components/Intro';

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
