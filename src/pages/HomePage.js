import StyledNavContainer from '../components/NavBar';
import { Container, SubContainer } from '../components/Container';
import StyledIntroMasterContainer from '../components/Intro';

const HomePage = () => {
  return (
    <section>
      <Container>
        <SubContainer>
          <StyledNavContainer />
          <StyledIntroMasterContainer />
        </SubContainer>
      </Container>
    </section>
  );
};

export default HomePage;
