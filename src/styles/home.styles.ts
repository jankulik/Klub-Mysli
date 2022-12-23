import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapperTop: {
    height: 'calc(100vh - 56px)',
    position: 'relative',
    paddingTop: 250,
    paddingBottom: 130,

    [theme.fn.smallerThan('xs')]: {
      paddingTop: '20vh',
      paddingBottom: 50,
    },
  },

  wrapperBottom: {
    height: 'calc(100vh - 140px)',
    position: 'relative',
    paddingTop: 80,
    paddingBottom: 30,

    [theme.fn.smallerThan('xs')]: {
      minHeight: '700px',
      paddingTop: 15,
      paddingBottom: 15,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textAlign: 'center',
    color: 'white',

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    minWidth: '200px',
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));
