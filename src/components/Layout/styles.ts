import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  wrapper: {
    flex: 1,
  },
}));