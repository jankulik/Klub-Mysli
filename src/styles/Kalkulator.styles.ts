import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-120px',
    rowGap: '20px',
  },
  
  rectangle: {
    height: 'fit-content',
    width: '100vw',
    padding: '2rem 2rem',
    background: '#018032',
    boxShadow: '0px 0px 0.4rem black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.4rem',
    margin: '10px 0 10px',
  },
  
  flexContainer: {
    padding: '10rem 6vw 0rem',
    display: 'flex',
    flexDirection: 'column',

    [`& > div`]: {
      width: '100%',
      // textAlign: 'left',
      lineHeight: '1.5rem',
      fontSize: '1rem',
    },
  },
}));
