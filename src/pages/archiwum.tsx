import Layout from '../components/Layout';
import Head from 'next/head';
import { useStyles } from '../styles/archiwum.styles';
import pastMeetings from '../utils/pastMeetings.json';
import MeetingCard from '../components/MeetingCard';
import { SimpleGrid } from '@mantine/core';

export default function Archiwum() {
  const { classes, theme } = useStyles();

  return (
    <>
      <Head>
        <title>Archiwum | Klub Myśli Ekologicznej</title>
      </Head>

      <Layout>
        <div className={classes.parallax}>
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
        </div>
      </Layout>
    </>
  )
}
