import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import { StyledParagraph } from '../components/Paragraph';
import StyledSmallProject from '../components/ProjectComponents/SmallProject';
import proj1Src from '../components/ProjectComponents/iron-motorcycles.png';
import proj2Src from '../components/ProjectComponents/movie-memory.png';
import proj3Src from '../components/ProjectComponents/cv-creator.png';
import proj4Src from '../components/ProjectComponents/battleship.png';
import device from '../assets/data/deviceSizes';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const ProjectsContainer = ({ className }) => {
  const projects = [
    {
      title: 'Iron Motorcycles',
      category: 'Web Development',
      textContent:
        'An e-commerce mock of a fictional Harley Davidson Motorcycle retailer. Built with React, I makes use of react hooks such as the Context API to handle data across multiple components.',
      src: proj1Src,
      alt: 'Iron Motorcycles website displayed on a apple computer and iphone.',
      canHover: true,
      important: false,
    },
    {
      title: 'Movie Memory',
      category: 'Web Development',
      textContent:
        'A game designed to test your memory. Read about my journey on refreshing my use with API\'s, my new approach to tackling web projects with a "Plan first, code after" approach, and more.',
      src: proj2Src,
      alt: 'Movie Memory website displayed on a apple computer and iphone.',
      canHover: true,
      important: false,
    },
    {
      title: 'CV-Creator',
      category: 'Web Development',
      textContent:
        'An easy to use application that allows the user to create a beautiful CV. Take a look at how I pushed through learning the basics of React where I use Class and Functional components.',
      src: proj3Src,
      alt: 'CV-Creator website displayed on a apple computer.',
      canHover: true,
      important: false,
    },
    {
      title: 'Battleship',
      category: 'Web Development',
      textContent:
        'The classic game of Battleship! Checkout my Test Driven Development process used to make this game against a (not very intelligent) computer.',
      src: proj4Src,
      alt: 'Battleship website displayed on a apple computer and iphone.',
      canHover: true,
      important: false,
    },
    {
      title: "Where's (?)",
      category: 'Web Development',
      textContent:
        "A Where's Waldo inspired game that makes use of Firebase to store game scores from players across the world.",
      src: '',
      alt: "Where's (?) website displayed on a apple computer and iphone.",
      canHover: false,
      important: true,
    },
  ];

  return (
    <div className={className}>
      {projects.map((project, index) => {
        return (
          <StyledSmallProject
            key={index}
            src={project.src}
            alt={project.alt}
            category={project.category}
            title={project.title}
            textContent={project.textContent}
            canHover={project.canHover}
            important={project.important}
          />
        );
      })}
    </div>
  );
};

const StyledProjectsContainer = styled(ProjectsContainer)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
  margin: 50px 0;

  @media ${device.laptop} {
    margin: 0 0;
    flex-direction: column;
    gap: 0;
  }
`;

const ProjectsPage = () => {
  return (
    <section style={{ padding: '12% 0%' }}>
      <PageTitle>What I've been up to</PageTitle>
      <StyledParagraph>
        I’ve been called a busy body by people and I have to agree with them. I
        always have a project brewing in a repo or ideas firing off in my brain.
        Feel free to take a look at a few of the projects I’ve created.
      </StyledParagraph>
      <StyledProjectsContainer />
    </section>
  );
};

const StyledProjectsPage = styled(ProjectsPage)`
  background-color: red;
`;

export default StyledProjectsPage;
