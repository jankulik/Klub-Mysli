import Layout from '../components/Layout';
import Head from 'next/head';
import { useStyles } from '../styles/zapowiedzi.styles';
import MeetingCard from '../components/MeetingCard';
import upcomingMeetings from '../utils/upcomingMeetings.json';

export default function Zapowiedzi() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Zapowiedzi | Klub Myśli Ekologicznej</title>
      </Head>

      <Layout>
        <div className={classes.parallax}>
          <div className={classes.wrapper}>
            {upcomingMeetings.map((meeting) => {
              return (
                <MeetingCard
                  key={meeting.title}
                  title={meeting.title}
                  description={meeting.description}
                  topic={meeting.topic}
                  date={meeting.date}
                  individual={true}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}
