import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    maxWidth: '1000px',
    height: 'fit-content',
    backgroundColor: 'white',
    borderRadius: theme.radius.md,
    width: '94vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '30px',

    [theme.fn.smallerThan('sm')]: {
      padding: '15px',
    },
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },

  title: {
    textAlign: 'left',
    fontSize: 32,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 24,
    },
  },

  content: {
    [theme.fn.largerThan('sm')]: {
      flex: '1.4 1 0',
      textAlign: 'justify',
      textJustify: 'inter-word',
    },
  },

  image: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.radius.md,
    minHeight: '300px',

    [theme.fn.largerThan('sm')]: {
      flex: '1 1 0',
      marginRight: '20px',
    },

    [theme.fn.smallerThan('sm')]: {
      marginBottom: '20px',
    },
  },
}));
