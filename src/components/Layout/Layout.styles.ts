import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  navbar: {
    display: 'flex',
    height: '3.5rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  bgWrapper: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    zIndex: -1,
  },

  wrapper: {
    paddingBottom: '5rem',
  },

  footer: {
    width: '100%',
    height: '5rem',
    lineHeight: '5rem',
    backgroundColor: '#018032',
    marginTop: '-50px',
  },

  footerText: {
    marginLeft: '4vw',
    display: 'inline-block',
    lineHeight: '1rem',
    fontSize: '0.85rem',
    color: 'white',
  },
  
  footerIcon: {
    margin: '0',
    lineHeight: '1rem',
    marginTop: 'calc(2.5rem - 15px)',
    marginRight: '4vw',
    float: 'right',
  },
  
  link: {
    marginRight: '0.9vw',
  },
}));