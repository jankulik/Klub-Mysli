import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  break: {
    display: 'block',
    marginBottom: '0.3em',
  },

  checkboxText: {
    color: 'white',
    lineHeight: '1.2rem',
  },

  button: {
    backgroundColor: '#018032',
    border: 'none',
    color: 'white',
    padding: '0.6rem 1.5rem',
    textDecoration: 'none',
    display: 'flex',
    fontSize: '1rem',
    borderRadius: '0.4rem',
    boxShadow: '0px 0px 0.6rem black',
    cursor: 'pointer',
    marginTop: '10px',
    marginBottom: '10px',

    '&:hover': {
      backgroundColor: '#016527',
    },

    '&:active': {
      transform: 'scale(0.98)',
    },
  },
  
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rectangle: {
    height: 'fit-content',
    width: '100vw',
    padding: '2rem 2rem',
    background: '#018032',
    boxShadow: '0px 0px 0.4rem black',
    color: 'white',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: '0.4rem',
    margin: '10px 0 10px',
  },
  
  rectangle2: {
    width: '100%',
    height: 'fit-content',
    padding: '2rem 2rem',
    background: '#018032',
    color: 'white',
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: '0.4rem',
    margin: '10px 0 10px',
    overflow: 'hidden',
    boxShadow: '0px 0px 0.4rem black',
    maxWidth: '58.208125rem',
  },
}));
