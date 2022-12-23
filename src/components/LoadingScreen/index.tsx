import { useStyles } from './styles';
import { Center, Loader } from '@mantine/core';

export default function LoadingScreen() {
  const { classes } = useStyles();

  return (
    <Center>
      <Loader
        size={60}
        className={classes.loader}
      />
    </Center>
  );
}
