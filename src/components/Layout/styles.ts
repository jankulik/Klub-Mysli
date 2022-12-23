import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    flex: 1,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',

    [`@media only screen and (max-device-width: ${theme.breakpoints.md}px)`]: {
      backgroundAttachment: 'scroll',
      minHeight: '700px',
    },

    // ['@media (max-height: 780px)']: {
    //   height: 'calc(100vh - 140px)',
    // },

    // parallax: {
    //   backgroundAttachment: 'fixed',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover',
    //   height: 'calc(100vh - 140px)',

    //   [`@media only screen and (max-device-width: ${theme.breakpoints.md}px)`]: {
    //     backgroundAttachment: 'scroll',
    //     minHeight: '700px',
    //   },

    //   [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    //     height: '100%',
    //   },
    // },
  },
}));