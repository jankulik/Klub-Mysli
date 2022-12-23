import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    padding: '20px 3vw calc(100vh - 755px) 3vw',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: '20px',
    },
  },
}));
