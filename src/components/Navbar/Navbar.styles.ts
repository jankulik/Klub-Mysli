import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  header: {
    position: 'sticky',
    top: '0',
    zIndex: 99,
  },
  
  navbar: {
    display: 'flex',
    height: '56px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },

  burger: {
    marginRight: '10px',

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: 'none',
    },
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',
  },

  menuList: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '0px',
    width: '288px',
    right: '-288px',
    transition: 'all 0.2s',
    minHeight: '100vh',
    backgroundColor: 'white',
    zIndex: -1,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      position: 'unset',
      flexDirection: 'row',
      minHeight: 'fit-content',
      width: 'fit-content',
      columnGap: '0.5rem',
      paddingTop: '1px',
      paddingBottom: '1px',
      alignItems: 'center',
      marginRight: '16px',
      zIndex: 99,
    },
  },

  active: {
    right: 0,
  },
}));
