import StyledNavContainer from '../Components/NavBar';
import { Container, SubContainer } from '../Components/Container';
import { StyledSocialMediaContainer1 } from '../Components/SocialMediaContainers';
import StyledIntroContainer from '../Components/Intro';

const Home = () => {
  return (
    <div>
      <Container>
        <SubContainer>
          <StyledNavContainer />
          <StyledSocialMediaContainer1 homepage />
          <StyledIntroContainer homepage />
        </SubContainer>
      </Container>
    </div>
  );
};

export default Home;
