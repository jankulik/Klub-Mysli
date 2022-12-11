import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: '20px',
  },
  
  flexContainer: {
    padding: '2rem 3vw 0rem',
    display: 'flex',
    flexDirection: 'column',

    [`& > div`]: {
      width: '100%',
      lineHeight: '1.5rem',
      fontSize: '1rem',
    },
  },
}));
