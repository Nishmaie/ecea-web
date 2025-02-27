import { styled } from '@mui/system';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { MdSearch } from 'react-icons/md';

export const SearchBarBg = styled('div')(({ theme }) => ({
  background: theme.palette.searchBarColor,
  height: '3rem',
  boxShadow: theme.palette.searchBarShadow,
  margin: '0.5rem 7.5rem',
  borderRadius: '0.7rem',
  display: 'flex',
  '@media (max-width: 767px)': {
    margin: '0rem 1rem',
    height: '2.8rem',
  },
}));

const Search = styled('div')(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.searchBarText,
  display: 'flex',
  fontWeight: 'bold',
  gap: '0.7rem',
  padding: '0.7rem 0 0.7rem 1.2rem',
  margin: '0 0.5rem 0 0rem',
  cursor: 'pointer',
  '@media (max-width: 767px)': {
    fontSize: '0.75rem',
    padding: '0.65rem',
  },
}));

const SearchBar = () => {
  const iconValue = useMemo(() => ({
    className: 'icon',
  }), []);
  return (
    <SearchBarBg>
      <Search>
        <IconContext.Provider
          value={iconValue}
        >
          <MdSearch />
        </IconContext.Provider>
        <span>Search</span>
      </Search>
    </SearchBarBg>
  );
};

export default SearchBar;
