import { useStyles } from '../styles/ekologia.styles';
import Card from '../components/EducationCard';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Ekologia() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Ekologia | Klub Myśli Ekologicznej</title>
      </Head>

      <Layout>
        <div className={classes.parallax}>
          <div className={classes.wrapper}>
            <Card
              title="Zapraszamy do lektury książki „Filozofia, psychologia i ekologia w edukacji dla zrównoważonego rozwoju” dostępnej jako bezpłatny pdf"
              documentUrl='http://www.obradzionkow.robia.pl/uploaded3/zmniejszone/pdfy/1627.pdf'
            >
              Mimo, że została wydana w 2010 roku, to jej przekaz coraz bardziej zyskuje na aktualności, jako że autorzy – prof. Piotr Skubała, dr Bogdan Ogrodnik oraz dr Ryszard Kulik – łączą podejście naukowe z wieloletnim doświadczeniem w edukacji dzieci, młodzieży i dorosłych w obszarach ekologii, ekofilozofii oraz ekopsychologii.
            </Card>

            <Card
              title="Wykład pt. „Wkraczamy na planetarną terra incognita”"
              videoId='QE6ZEWzUpy4'
            >
              Prof. Piotr Skubała podczas TEDx Katowice przedstawił wykład pt. „Wkraczamy na planetarną terra incognita” o granicach planetarnych, o ich przekraczaniu oraz o zagrożeniach, które się z tym wiążą.
            </Card>

            <Card
              title="Spotkanie z prof. Piotrem Skubałą"
              videoId='xfMBtUO_OaQ'
            >
              Ślad ekologiczny, ślad węglowy, ile procent zasobów Ziemi wykorzystujemy? Jak wprowadzać na własnym podwórku? Deforestacja i reforestacja. Spotkanie z prof. Piotrem Skubałą – ekologiem, profesorem nauk biologicznych, popularyzatorem nauki. Ratowanie świata – spieszyć się, czy nie?
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}
