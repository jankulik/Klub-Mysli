import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useStyles } from '../styles/home.styles';
import { Button, Overlay, Title, Text, Container, ThemeIcon, List } from '@mantine/core';
import Image from 'next/image';
import { IconCheck } from '@tabler/icons';
import { useScrollIntoView } from '@mantine/hooks';
import Link from 'next/link';

export default function Home() {
  const { classes, theme } = useStyles();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();

  return (
    <>
      <Head>
        <title>Klub Myśli Ekologicznej</title>
      </Head>

      <Layout>
        <div className={classes.wrapperTop}>
          <Image
            src={'/images/tree1.jpg'}
            layout='fill'
            objectFit='cover'
          />
          <Overlay color='#000' opacity={0.65} zIndex={1} />

          <div className={classes.inner}>
            <Title
              className={classes.title}
              sx={{ textAlign: 'center', color: 'white' }}
            >
              Fundacja Klub Myśli{' '}
              <Text
                component='span'
                inherit
                variant='gradient'
                gradient={{ from: theme.colors[theme.primaryColor][4], to: theme.colors[theme.primaryColor][7], deg: 45 }}
              >
                Ekologicznej
              </Text>
            </Title>

            <Container size={640}>
              <Text size='lg' className={classes.description}>
                W połączeniu ze sobą, innymi ludźmi i przyrodą – spotkania, warsztaty, inspiracje.
              </Text>
            </Container>

            <div className={classes.controls}>
              <Button
                onClick={() => scrollIntoView({ alignment: 'start' })}
                className={classes.control}
                variant='white'
                size='lg'
              >
                Dowiedz się więcej
              </Button>
              <Link href="/zapowiedzi" passHref>
                <Button className={classes.control} size="lg">
                  Spotkania
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.parallax}>
          <div className={classes.wrapperBottom} ref={targetRef}>
            <Overlay color='#000' opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
              <Title
                className={classes.title}
                sx={{ textAlign: 'center', color: 'white' }}
              >
                Krótko o nas
              </Title>

              <Container size={640}>
                <Text size='lg' className={classes.description}>
                  KME prowadzi działalność z zakresu ochrony środowiska zmierzającą do wzrostu wiedzy i świadomości ekologicznej mieszkańców Śląska i całej Polski, a także zmiany ich postaw na bardziej proekologiczne.
                </Text>
                <List
                  mt={30}
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={12} stroke={4} />
                    </ThemeIcon>
                  }
                >
                  <List.Item sx={{ color: 'white' }}>
                    Edukacja ekologiczna i prośrodowiskowa
                  </List.Item>
                  <List.Item sx={{ color: 'white' }}>
                    Promocja ochrony środowiska naturalnego poprzez zdrowy i ekologiczny styl życia
                  </List.Item>
                  <List.Item sx={{ color: 'white' }}>
                    Budowanie ruchu społecznego wokół idei rozwoju świadomości ekologicznej
                  </List.Item>
                  <List.Item sx={{ color: 'white' }}>
                    Rozwój i gromadzenie wiedzy w zakresie ekologii głębokiej i ekopsychologii
                  </List.Item>
                  <List.Item sx={{ color: 'white' }}>
                    Wspieranie rozwoju społeczeństwa obywatelskiego w zakresie pobudzania aktywności proekologicznej obywateli
                  </List.Item>
                  <List.Item sx={{ color: 'white' }}>
                    Działania na rzecz ekologii i ochrony zwierząt oraz ochrony dziedzictwa przyrodniczego
                  </List.Item>
                </List>
              </Container>


              <div className={classes.controls}>
                <Link href="/o-nas" passHref>
                  <Button
                    onClick={() => scrollIntoView({ alignment: 'start' })}
                    className={classes.control}
                    variant='white'
                    size='lg'
                  >
                    Dowiedz się więcej
                  </Button>
                </Link>
                <Link href="/zapowiedzi" passHref>
                  <Button className={classes.control} size="lg">
                    Spotkania
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
