import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    height: '300px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.fn.smallerThan('xs')]: {
      height: '150px',
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: 'white',

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },
}));
