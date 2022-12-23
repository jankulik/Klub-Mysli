import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  control: {
    height: 42,
    minWidth: '200px',
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan('xs')]: {
      width: '94vw',
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
}));
