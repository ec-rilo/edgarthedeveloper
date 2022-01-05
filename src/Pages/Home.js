import styled from 'styled-components';
import StyledNav from '../Components/NavBar';

const Container = styled.div`
  padding: 0 20px;
`;

const Home = () => {
  return (
    <div>
      <Container>
        <StyledNav />
      </Container>
    </div>
  );
};

export default Home;
