import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    width: '94vw',
    maxWidth: '1000px',
    height: 'fit-content',
    backgroundColor: 'white',
    borderRadius: theme.radius.md,
    padding: '30px',

    [theme.fn.smallerThan('sm')]: {
      padding: '15px',
    },
  },

  title: {
    textAlign: 'center',
    fontSize: 32,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 24,
    },
  },
}));
