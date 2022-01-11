import StyledNavContainer from '../components/NavBar';
import { SubContainer } from '../components/Container';
import StyledIntroMasterContainer from '../components/Intro';

const HomePage = () => {
  return (
    <section>
      <SubContainer>
        <StyledNavContainer />
        <StyledIntroMasterContainer />
      </SubContainer>
    </section>
  );
};

export default HomePage;
