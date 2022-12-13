import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  dropdown: {
    position: 'relative',
    display: 'inline-block',

    [`&:hover .${getRef('dropdownContent')}`]: {
      visibility: 'visible',
      opacity: 1,
      transition: '0s',
    },
  },

  dropdownContent: {
    ref: getRef('dropdownContent'),
    position: 'absolute',
    backgroundColor: 'white',
    fontSize: '1rem',
    width: '160px',
    borderRadius: '3px',
    boxShadow: '0px 0px 0.2rem 0px rgba(0, 0, 0, 0.4)',
    marginTop: '8px',
    marginLeft: 'calc(50% - 80px)',
    visibility: 'hidden',
    opacity: '0',
    transition: 'visibility 0.2s, opacity 0.2s',

    [`& a`]: {
      color: 'black',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
    },

    [`& a:hover`]: {
      backgroundColor: theme.colors.gray[1],
    },
  },

  link: {
    color: 'black',
    fontSize: '1rem',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7px',
    borderRadius: '3px',

    '&:hover': {
      background: theme.colors.gray[1],
      cursor: 'pointer',
    },
  },
}));
