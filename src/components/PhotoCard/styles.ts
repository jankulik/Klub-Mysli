import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    maxWidth: '1000px',
    height: 'fit-content',
    backgroundColor: 'white',
    borderRadius: '7px',
    width: '94vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '30px'
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
  },

  image: {
    flex: '1 1 0',

    [theme.fn.largerThan('sm')]: {            
      marginRight: '20px',
    },

    [theme.fn.smallerThan('sm')]: {            
      marginBottom: '20px',
    },
  },

  content: {
    flex: '1.4 1 0',
    
    [theme.fn.largerThan('sm')]: {            
      textAlign: 'justify',
      textJustify: 'inter-word',
    },
  },
}));
