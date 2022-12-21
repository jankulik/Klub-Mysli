import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    width: '94vw',
    maxWidth: '1000px',
    height: 'fit-content',
    backgroundColor: 'white',
    borderRadius: '7px',
  },

  title: {
    padding: '15px',
    textAlign: 'center',
    fontSize: 32,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 24,
    },
  },

  content: {
    padding: '15px',
  },
}));
