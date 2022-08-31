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
    width: '10rem',
    borderRadius: '3px',
    boxShadow: '0px 0px 0.2rem 0px rgba(0, 0, 0, 0.4)',
    zIndex: 1,
    marginTop: '0.3rem',
    marginLeft: 'calc(50% - 5rem)',
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
      backgroundColor: 'rgba(0, 150, 0, 0.05)',
    },
  },

  highlight: {
    background: 'rgba(0, 0, 0, 0)',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'max-content',
    height: 'max-content',
    padding: '7px',
    borderRadius: '3px',
    overflow: 'visible',
    position: 'relative',

    '&:hover': {
      background: 'rgba(0, 150, 0, 0.05)',
      cursor: 'pointer',
    },
  },

  link: {
    color: 'black',
    fontSize: '1rem',
    position: 'relative',
  },
}));
