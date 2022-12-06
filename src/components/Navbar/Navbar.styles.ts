import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  header: {
    position: 'sticky',
    zIndex: 99,
    top: '0',
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },

  navbar: {
    display: 'flex',
    height: '3.5rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  menuBar: {
    marginRight: '0.6rem',

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: 'none',
    },
  },

  logo: {
    // marginLeft: '0.6rem',
    // width: '9.42rem',
    // height: '3.5rem',
    // maxWidth: '9.42rem',
    // maxHeight: '3.5rem',
    // position: 'relative',

    // '&:hover': {
    //   cursor: 'pointer',
    // },
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',
  },

  menuList: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '3.4rem',
    width: '288px',
    right: '-288px',
    padding: '24px 16px',
    transition: 'all 0.2s',
    minHeight: 'calc(100vh - 3.4rem)',
    backgroundColor: 'white',

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      position: 'unset',
      flexDirection: 'row',
      minHeight: 'fit-content',
      width: 'fit-content',
      columnGap: '0.5rem',
      paddingTop: '1px',
      paddingBottom: '1px',
      alignItems: 'center',
    },
  },

  active: {
    right: 0,
  },
}));
