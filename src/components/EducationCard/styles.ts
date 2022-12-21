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
    textAlign: 'center',
  },

  video: {    
    [`& iframe`]: {
      width: '90vw',
      height: '50.625vw',
      maxWidth: '960px',
      maxHeight: '540px',
      borderRadius: '7px',
      marginBottom: '-10px',
    },
  },
}));
