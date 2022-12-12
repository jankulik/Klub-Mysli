import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    maxWidth: '1000px',
    minHeight: '400px',
    height: 'fit-content',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '7px',
    // boxShadow: `0px 0px 8px 0px ${theme.colors.gray[4]}`,

    [theme.fn.smallerThan('sm')]: {
      width: '94vw',
      flexDirection: 'column',
    },
  },

  image: {
    flex: '1 1 0',
    height: '370px',
    padding: '0px 0px 0px 20px',

    [theme.fn.smallerThan('sm')]: {            
      padding: '20px',
    },
  },

  content: {
    padding: '30px',
    flex: '1.4 1 0',
    
    [theme.fn.largerThan('sm')]: {            
      textAlign: 'justify',
      textJustify: 'inter-word',
    },
  },
}));
