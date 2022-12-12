import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundColor: 'transparent',
  },

  title: {
    color: theme.colors[theme.primaryColor][0]
  },

  description: {
    color: theme.white,
  },
}));
