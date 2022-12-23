import Layout from '../components/Layout';
import Head from 'next/head';
import { useStyles } from '../styles/zapowiedzi.styles';
import MeetingCard from '../components/MeetingCard';
import upcomingMeetings from '../utils/upcomingMeetings.json';
import TitleCard from '../components/TitleCard';

export default function Zapowiedzi() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Zapowiedzi | Klub Myśli Ekologicznej</title>
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
          title='Zapowiedzi'
          imageUrl='/images/bird.jpg'
        />

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
      </Layout>
    </>
  )
}
