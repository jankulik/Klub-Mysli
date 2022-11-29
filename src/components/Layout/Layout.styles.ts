import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  // navbar: {
  //   display: 'flex',
  //   height: '3.5rem',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  // },

  bgWrapper: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    zIndex: -1,
  },

  wrapper: {
    flex: 1,
  },
}));