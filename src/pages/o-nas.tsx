import Layout from '../components/Layout';
import Head from 'next/head';
import AboutCard from '../components/AboutCard';
import { useStyles } from '../styles/o-nas.styles';
import Link from 'next/link';
import { Button } from '@mantine/core';

export default function ONas() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>O Nas | Klub Myśli Ekologicznej</title>
      </Head>

      <Layout>
        <div className={classes.parallax}>
          <div className={classes.container}>
            <AboutCard name='Piotr Skubała' imageUrl='/images/skubala.jpg'>
              Profesor nauk biologicznych na Wydziale Nauk Przyrodniczych Uniwersytetu Śląskiego. Ekolog, akarolog (zajmuje się ekologią i systematyką roztoczy Oribatida), autor 145 artykułów naukowych, 47 monografii lub rozdziałów w monografiach, 38 komunikatów naukowych oraz 135 artykułów popularnonaukowych. Etyk środowiskowy, edukator ekologiczny, działacz na rzecz ochrony przyrody; aktywista klimatyczny, lider Climate Reality Foundation Ala Gore’a, „ethic expert” w Komisji Europejskiej w Brukseli (program HORIZON 2020), członek komisji ds. GMO i GMM przy Ministrze Środowiska (2014-2019), stały współpracownik miesięczników AURA. Ochrona Środowiska i Dzikie Życie, współorganizator Festiwalu Kultury Ekologicznej „Zielono Mi”, organizator i współprowadzący spotkania Klubu Myśli Ekologicznej.
            </AboutCard>

            <AboutCard name='Ryszard Kulik' imageUrl='/images/kulik.jpg'>
              Doktor psychologii, trener rekomendowany przez Polskie Towarzystwo Psychologiczne (rekomendacja II st.). Od 30 lat zaangażowany w prowadzenie grup w ramach edukacji psychologicznej i ekologicznej. Specjalizuje się w prowadzeniu treningów interpersonalnych na procesie, grup w obszarze ekopsychologii i głębokiej ekologii. Jego misją jest towarzyszenie człowiekowi w procesie przekraczania oddzielenia od samego siebie, innych ludzi i przyrody. Autor książek dotyczących relacji człowiek – natura, w których łączy perspektywę psychologiczną, duchowa i ekologiczną, m.in. „Odkrywanie natury”, „Stąpając mocno po Ziemi”, czy „Człowiek wobec natury”. Członek redakcji miesięcznika „Dzikie Życie”; regularnie publikuje swoje eseje również w Gazecie Wyborczej. Laureat nagród: „Zielony Czek”, „Dobromir roku 2013” Ekologicznego Kongresu Gospodarczego, „Ekolaur 2019” Polskiej Izby Ekologii i Konkursu POP Science Festiwalu Nauki 2020. Zapalony rowerzysta i włóczykij; miłośnik dzikości i prostego życia poza głównym nurtem cywilizacji. Najwięcej o sobie i świecie nauczył się przebywając samotnie w dzikich miejscach oraz śpiąc w lesie, pod gołym niebem.
            </AboutCard>

            <AboutCard name='Barbara Wojtaszek' imageUrl='/images/wojtaszek.jpg'>
              Kiedyś nauczycielka języków polskiego i angielskiego, dzisiaj edukatorka ekologiczna, absolwentka Szkoły Trenerów Meritum w Katowicach oraz Treningu dla Kobiet Trzymających Kręgi w Sex&Love School Karo Akabal, aktywistka Śląskiego Ruchu Klimatycznego. W CV ma także pełnienie funkcji prezeski zarządu Fundacji Szczęśliwi Bez Cukru w Warszawie i wieloletnią pracę wychowawczą z dziećmi i młodzieżą w ramach Związku Harcerstwa Polskiego. Fascynuje ją integrowanie obszarów umysł – ciało – emocje – duch. Praktykuje holistyczne podejście do życia łączące zdrowe jedzenie (dobre dla ludzi i dla planety), pracę z ciałem w duchu lowenowskiej przyjemności, pozwalanie sobie na wrażliwość i odczuwanie całego koła emocji oraz doświadczanie zarówno relaksu jak i dyskomfortu na łonie przyrody. Prowadzi fanpejdż Klimatyczna Kuchnia na Facebooku.
            </AboutCard>

            <Link href="/statut2020.pdf" passHref>
              <Button
                className={classes.control}
                variant='white'
                size='lg'
              >
                Zobacz statut
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}
