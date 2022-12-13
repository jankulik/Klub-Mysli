import { useStyles } from '../styles/404.styles';
import { Title, Text, Button, Container, Group } from '@mantine/core';
import Link from 'next/link';

export default function Custom404() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Coś poszło nie tak...</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Ta strona nie istnieje. Mogła zostać usunięta lub przeniesiona.
      </Text>
      <Group position="center">
        <Link href="/" passHref>
          <Button variant="subtle" size="md">
            Powrót do strony głównej
          </Button>
        </Link>
      </Group>
    </Container>
  );
}