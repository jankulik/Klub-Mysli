import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
  sliderRoot: {
    marginTop: '0.5rem',
    paddingBottom: '1.5rem',

    // [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    //   marginRight: '12vw',
    //   marginLeft: '12vw',
    // },
  },

  sliderLabel: {
    marginTop: -4,
  },

  sliderMarkLabel: {
    marginTop: 1,
    color: 'white',
  },

  center: {
    textAlign: 'center',
  },
  
  break: {
    display: 'block',
    marginBottom: '0.3em',
  },

  checkboxText: {
    color: 'white',
    lineHeight: '1.2rem',
  },

  buttonRoot: {
    backgroundColor: '#018032',
    margin: '10px 0px 10px',

    '&:hover': {
      backgroundColor: theme.fn.darken('#018032', 0.05),
    },
  },
  
  buttonBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rectangle: {
    height: 'fit-content',
    padding: '2rem 2rem',
    background: '#018032',
    boxShadow: '0px 0px 0.4rem black',
    color: 'white',
    borderRadius: '0.4rem',
    margin: '10px 0 10px',
  },
  
  results: {
    maxWidth: '58.208125rem',
  },
}));
