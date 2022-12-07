import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  menu: {
    marginTop: '16px',
  },

  control: {
    display: 'block',
    width: '100%',
    padding: '8px 20px',
    color: 'black',
    fontSize: '1rem',
    webkitTapHighlightColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },

  subLink: {
    display: 'block',
    textDecoration: 'none',
    padding: '8px 16px 8px 16px',
    marginLeft: '34px',
    fontSize: '1rem',
    color: 'rgb(115, 115, 115)',
    borderLeft: '1px solid lightgray',
    webkitTapHighlightColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },

  chevron: {
    transition: '0.2s',
  },

  collapsible: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
