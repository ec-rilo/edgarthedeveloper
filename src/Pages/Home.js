import StyledNavContainer from '../Components/NavBar';
import { Container, SubContainer } from '../Components/Container';
import { StyledSocialMediaContainer1 } from '../Components/SocialMediaContainers';

const Home = () => {
  return (
    <div>
      <Container>
        <SubContainer>
          <StyledNavContainer />
          <StyledSocialMediaContainer1 homepage />
        </SubContainer>
      </Container>
    </div>
  );
};

export default Home;
