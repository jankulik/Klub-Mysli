import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  sliderRoot: {
    marginTop: '12px',
    paddingBottom: '24px',

    // [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    //   marginRight: '12vw',
    //   marginLeft: '12vw',
    // },
  },

  sliderMarkLabel: {
    marginTop: 1,
    color: 'white',
  },

  buttonRoot: {
    backgroundColor: '#018032',
    margin: '10px 0px 10px',

    '&:hover': {
      backgroundColor: theme.fn.darken('#018032', 0.05),
    },
  },

  wrapper: {
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '20px',
  },

  control: {
    height: 42,
    minWidth: '200px',
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan('xs')]: {
      width: '94vw',
    },
  },
}));
