import Layout from '../components/Layout';
import Head from 'next/head';
import { useStyles } from '../styles/archiwum.styles';
import pastMeetings from '../utils/pastMeetings.json';
import MeetingCard from '../components/MeetingCard';
import { SimpleGrid } from '@mantine/core';
import TitleCard from '../components/TitleCard';

export default function Archiwum() {
  const { classes, theme } = useStyles();

  return (
    <>
      <Head>
        <title>Archiwum | Klub Myśli Ekologicznej</title>
        <meta
          name="description"
          content="Klub Myśli Ekologicznej prowadzi działalność z zakresu ochrony środowiska zmierzającą do wzrostu wiedzy i świadomości ekologicznej mieszkańców Śląska i całej Polski, a także zmiany ich postaw na bardziej proekologiczne."
          key="desc"
        />
        <meta
          property="og:title"
          content="Klub Myśli Ekologicznej"
        />
        <meta
          property="og:description"
          content="Klub Myśli Ekologicznej prowadzi działalność z zakresu ochrony środowiska zmierzającą do wzrostu wiedzy i świadomości ekologicznej mieszkańców Śląska i całej Polski, a także zmiany ich postaw na bardziej proekologiczne."
        />
        <meta
          property="og:image"
          content="/images/tree1.jpg"
        />
      </Head>

      <Layout imageUrl='images/fern.jpg'>
        <TitleCard
          title='Archiwum'
          imageUrl='/images/bird.jpg'
        />

        <div className={classes.wrapper}>

          <SimpleGrid
            cols={3}
            breakpoints={[
              { maxWidth: theme.breakpoints.lg, cols: 2, spacing: 'md' },
              { maxWidth: theme.breakpoints.md, cols: 1, spacing: 'sm' },
            ]}
          >
            {pastMeetings.slice(0).reverse().map((meeting) => {
              return (
                <section key={meeting.title}>
                  <MeetingCard
                    title={meeting.title}
                    description={meeting.description}
                    topic={meeting.topic}
                    date={meeting.date}
                  />
                </section>
              );
            })}
          </SimpleGrid>
        </div>
      </Layout>
    </>
  )
}
