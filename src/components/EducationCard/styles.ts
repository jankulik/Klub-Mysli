import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    width: '94vw',
    maxWidth: '1000px',
    minHeight: '300px',
    height: 'fit-content',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
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

  content: {
    textAlign: 'center',
  },

  video: {    
    [`& iframe`]: {
      width: '90vw',
      height: '50.625vw',
      maxWidth: '940px',
      maxHeight: '528.75px',
      borderRadius: theme.radius.md,
    },
  },
}));
