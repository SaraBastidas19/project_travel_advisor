import { alpha } from '@mui/material';

const useStyles = () => {
  return {
    title: {
      display: 'none',
      '@media (min-width: 600px)': {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: '4px',
      backgroundColor: alpha('#fff', 0.15),
      '&:hover': { backgroundColor: alpha('#fff', 0.25) },
      marginRight: '16px',
      marginLeft: 0,
      width: '100%',
      '@media (min-width: 600px)': { marginLeft: '24px', width: 'auto' },
    },
    searchIcon: {
      padding: '0 16px', 
      height: '100%', 
      position: 'absolute', 
      pointerEvents: 'none', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: '8px 8px 8px 0', 
      paddingLeft: '40px', 
      transition: 'width 300ms',
      width: '100%', 
      '@media (min-width: 960px)': { width: '20ch' },
    },
    toolbar: {
      display: 'flex', 
      justifyContent: 'space-between',
    },
  };
};

export default useStyles;
