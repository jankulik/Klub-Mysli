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

  control: {
    height: 42,
    minWidth: '200px',
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan('xs')]: {
      width: '94vw',
    },
  },

  container: {
    padding: '20px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '20px',
  },
}));
