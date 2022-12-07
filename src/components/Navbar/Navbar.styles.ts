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
    height: '56px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
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
    top: '56px',
    width: '288px',
    right: '-288px',
    // padding: '24px 16px',
    transition: 'all 0.2s',
    minHeight: 'calc(100vh - 56px)',
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
