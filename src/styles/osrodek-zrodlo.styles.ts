import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
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
      width: '94vw',
      maxWidth: '1000px',
      borderRadius: theme.radius.md,
    },
  },
}));
