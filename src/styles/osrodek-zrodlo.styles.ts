import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  parallax: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url(images/fern.jpg)',
    height: '100%',

    [`@media only screen and (max-device-width: ${theme.breakpoints.md}px)`]: {
      backgroundAttachment: 'scroll',
      minHeight: '700px',
    },
  },

  wrapper: {
    padding: '20px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '20px',
  },

  map: {    
    [`& iframe`]: {
      maxWidth: '1000px',
      borderRadius: '7px',
      width: '94vw',    
    },
  },
}));
