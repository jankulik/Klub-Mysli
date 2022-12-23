import { useStyles } from '../styles/ekologia.styles';
import Card from '../components/EducationCard';
import Layout from '../components/Layout';
import Head from 'next/head';
import TitleCard from '../components/TitleCard';

export default function Ekopsychologia() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Ekopsychologia | Klub Myśli Ekologicznej</title>
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

      <Layout>
        <div className={classes.parallax}>
          <TitleCard
            title='Ekopsychologia'
            imageUrl='/images/bird.jpg'
          />

          <div className={classes.wrapper}>
            <Card
              title="„Odkrywanie Natury” - bezpłatny pdf"
              documentUrl='https://pracownia.org.pl/upload/filemanager/pracownia.org.pl/Publikacje/Odkrywanie-natury-Kulik.pdf'
            >
              To książka, w której dr Ryś Kulik zachęca do zadawania głębokich pytań i odpowiadania na nie: Kim jestem? Czym jest ciało? Czym jest śmierć? Co jest naturalnym środowiskiem człowieka? Czym jest wolność? Czym jest szczęście i co jest jego źródłem? Dlaczego ludzie kupują tyle rzeczy? Czy poprawa sytuacji ekologicznej wiąże się z obniżeniem jakości życia? Na czym polega konflikt między potrzebami człowieka a potrzebami przyrody? Czym jest postęp? Czy technika uratuje świat? Czym są śmieci? Czym jest praca? Czym są podróże i dlaczego ludzie podróżują? Czy jesteśmy lepsi od innych, pozaludzkich form życia? Czy życie człowieka jest tak samo wartościowe jak życie żaby? Kto jest naszym przeciwnikiem? Co się musi stać, by człowiek zmienił swoje podejście do przyrody? Jak pogłębiać swój związek z przyrodą? Jaki sposób życia byłby najlepszy dla nas i Ziemi?
            </Card>

            <Card
              title="Zapraszamy do bezpłatnego pobrania książki dobrej na kryzysowy czas w formacie pdf. „Ziemia – mój jedyny dom” autorstwa dr Rysia Kulika"
              documentUrl='http://www.obradzionkow.robia.pl/uploaded3/zmniejszone/pdfy/1621.pdf'
            >
              Została zainspirowana spiralą Ponownego Połączenia (The Work That Reconnects) Joanny Macy. Książka zaczyna się hymnem wdzięczności dla żywiołów dających życie, po którym następuje zderzenie ze stanem świata i jego głębokim kryzysem. „Dopóki bowiem nie doświadczymy, że w naszym bucie jest kamyk, dopóty nie będziemy w stanie podjąć właściwych decyzji – uzasadnia autor. To dlatego w negatywnych przeżyciach i emocjach jest tak duży potencjał i wartość. To dlatego na początku drogi tak ważne jest spojrzenie prawdzie w oczy i przerażenie się, by fakty dotyczące naszej rzeczywistej sytuacji mogły zaowocować rzeczywistą zmianą. Bez doświadczenia kryzysowej sytuacji nic nie zmienimy. Zatem rozpoczynamy naszą podróż od przeglądu tych wszystkich obszarów życia, w których doświadczamy kamyka w bucie, choć usilnie często zaprzeczamy, że on tam w ogóle jest”.
            </Card>

            <Card
              title="Podkast z dr Ryszardem Kulikiem, autorem książki „Odkrywanie natury. Praktyka głębokiej ekologii”"
              videoId='zAntORIT0Og'
            >
              Rozmawia Rafał Górski, prezes Instytutu Spraw Obywatelskich.
            </Card>

            <Card
              title="Webinar „Dlaczego człowiek niszczy przyrodę?” prowadzony przez dr Ryszarda Kulika."
              videoId='orMWUW7jruk'
            >
              Dr Kulik opowiada między innymi o psychologicznych aspektach ekologii.
            </Card>

            <Card
              title="Wykład dr. Ryszarda Kulika"
              videoId='sW4sE06GjyY'
            >
              Człowiek i inne gatunki – łódzkie spotkania ekozoficzne. Ekologia głęboka czyli filozofia w służbie Ziemi
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}
