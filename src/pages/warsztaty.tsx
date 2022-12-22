import Layout from '../components/Layout';
import Head from 'next/head';
import PhotoCard from '../components/PhotoCard';
import { useStyles } from '../styles/o-nas.styles';
import { Space } from '@mantine/core';
import WorkshopProps from '../types/WorkshopProps';
import Markdown from 'markdown-to-jsx';
import { getWorkshops } from '../utils/api';

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
      </Head>

      <Layout>
        <div className={classes.parallax}>
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
