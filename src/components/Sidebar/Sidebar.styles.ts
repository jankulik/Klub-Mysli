import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  menu: {
    marginTop: '-1rem',
  },

  control: {
    display: 'block',
    width: '100%',
    padding: '0.5rem',
    marginLeft: '0.25rem',
    color: 'black',
    fontSize: '1rem',
    webkitTapHighlightColor: 'transparent',
  },

  subLink: {
    display: 'block',
    textDecoration: 'none',
    padding: '0.5rem',
    paddingLeft: '1rem',
    marginLeft: '0.97rem',
    fontSize: '1rem',
    color: 'rgb(115, 115, 115)',
    borderLeft: '1px solid lightgray',
    webkitTapHighlightColor: 'transparent',
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
