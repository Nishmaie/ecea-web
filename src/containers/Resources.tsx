import { styled } from '@mui/system';
import ResourcesList from '../components/Resources/ResourceList';
// import SearchBar from '../components/Resources/SearchBar';
import { resources } from '../constants/dummy';

const Wrapper = styled('div')(({ theme }) => ({
  padding: '2rem 1.5rem',
  h1: {
    color: theme.palette.titleColor,
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '4rem',
  },
  '@media (max-width: 767px)': {
    padding: '0.2rem',
  },
}));

const Resources = () => (
  <Wrapper>
    <h1>Core Resources</h1>
    {/* <SearchBar /> */}
    <ResourcesList resources={resources} />
  </Wrapper>
);

export default Resources;
