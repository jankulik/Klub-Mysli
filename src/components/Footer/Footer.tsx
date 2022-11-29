import { createStyles, Container, Group, ActionIcon, Title, Text, Button, Center } from '@mantine/core';
import { IconBrandFacebook, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { useStyles } from './Footer.styles';
import Link from 'next/link';

export default function Footer() {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={8}>
          <Text>
            &copy; 2022 Klub Myśli Ekologicznej
          </Text>
        </Group>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Link href="https://www.facebook.com/klubmyslieko/" passHref>
            <Button component="a" className={classes.icon}>
              <Center>
                <IconBrandFacebook size={20} stroke={1.5} color='black' />
              </Center>
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@klubmysliekologicznej5921" passHref>
            <Button component="a" className={classes.icon}>
              <Center>
                <IconBrandYoutube size={20} stroke={1.5} color='black' />
              </Center>
            </Button>
          </Link>
        </Group>
      </Container >
    </div >
  );
}
