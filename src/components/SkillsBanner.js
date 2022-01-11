import styled from 'styled-components';
import device from '../assets/data/deviceSizes';

const BannerItem = ({ className, content }) => {
  return <div className={className}>○ {content}</div>;
};

const StyledBannerItem = styled(BannerItem)`
  color: var(--clr-gainsboro);
  font-family: var(--fnt-dark);
  font-size: 1.3rem;
  flex: 1 0 21%;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const SkillsBanner = ({ className }) => {
  const items = [
    'JavaScript ES6',
    'React',
    'Git',
    'Jest',
    'Styled-Components',
    'Firebase',
    'Unit Testing',
    'React-Hooks',
  ];

  return (
    <section className={className}>
      {items.map((item, index) => {
        return <StyledBannerItem key={index} content={item} />;
      })}
    </section>
  );
};

const StyledSkillsBanner = styled(SkillsBanner)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin: 100px 0;

  height: 100px;

  @media ${device.mobileL} {
    height: initial;
    flex-direction: column;
    margin: 50px 0;
  }
`;

export default StyledSkillsBanner;
