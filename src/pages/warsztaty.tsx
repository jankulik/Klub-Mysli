import Layout from '../components/Layout';
import Head from 'next/head';
import PhotoCard from '../components/PhotoCard';
import { useStyles } from '../styles/o-nas.styles';
import WorkshopProps from '../types/WorkshopProps';
import Markdown from 'markdown-to-jsx';
import { getWorkshops } from '../utils/api';
import TitleCard from '../components/TitleCard';

type WorkshopsProps = {
  workshops: WorkshopProps[]
}

export default function Warsztaty({ workshops }: WorkshopsProps) {
  const { classes } = useStyles();

  const generateCollapsible = (content: string) => {
    return (
      <Markdown>
        {content}
      </Markdown>
    );
  }

  return (
    <>
      <Head>
        <title>Warsztaty | Klub Myśli Ekologicznej</title>
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
          title='Warsztaty'
          imageUrl='/images/bird.jpg'
        />

        <div className={classes.wrapper}>
          {workshops.map((workshop) => {
            return (
              <PhotoCard
                key={workshop.slug}
                name={workshop.title}
                imageUrl={workshop.image}
                collapsible={generateCollapsible(workshop.content)}
              >
                {workshop.description}
              </PhotoCard>
            );
          })}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const workshops = JSON.parse(JSON.stringify(getWorkshops()));

  return {
    props: { workshops },
  }
}
