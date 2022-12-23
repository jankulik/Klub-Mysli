import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: theme.radius.md,
  },

  title: {
    padding: '15px',
    textAlign: 'center',
    fontSize: 32,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 24,
    },
  },

  date: {
    padding: '15px',
    textAlign: 'center',
    fontSize: 24,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 18,
    },
  },

  content: {
    padding: '15px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));
