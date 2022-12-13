import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  parallax: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url(images/fern.jpg)',
    height: 'calc(100vh - 140px)',

    [`@media only screen and (max-device-width: ${theme.breakpoints.md}px)`]: {
      backgroundAttachment: 'scroll',
      minHeight: '700px',
    },
  },

  wrapper: {
    padding: '20px 12px',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));