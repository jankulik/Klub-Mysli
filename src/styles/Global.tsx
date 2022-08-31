import { Global as MantineGlobal } from '@mantine/core';

export default function Global() {
  return (
    <MantineGlobal
      styles={(theme) => ({
        body: {
          padding: '0',
          margin: '0',
          // fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
        },
        
        '*': {
          margin: '0',
          padding: '0',
          outline: 'none',
          boxSizing: 'border-box',
          // fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
        },

        'a': {
          color: 'inherit',
          textDecoration: 'none',
        }
      })}
    />
  );
}