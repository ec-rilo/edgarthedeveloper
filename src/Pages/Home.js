import StyledNavContainer from '../Components/NavBar';
import { Container, SubContainer } from '../Components/Container';
import StyledIntroContainer from '../Components/Intro';

const Home = () => {
  return (
    <div>
      <Container>
        <SubContainer>
          <StyledNavContainer />
          <StyledIntroContainer />
        </SubContainer>
      </Container>
    </div>
  );
};

export default Home;
