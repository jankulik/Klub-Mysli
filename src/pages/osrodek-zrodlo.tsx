import Layout from '../components/Layout';
import Head from 'next/head';
import PhotoCard from '../components/PhotoCard';
import { Text, Space, Button, Center } from '@mantine/core';
import { useStyles } from '../styles/osrodek-zrodlo.styles';
import Link from 'next/link';
import TitleCard from '../components/TitleCard';

export default function OsrodekZrodlo() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Ośrodek Źródło | Klub Myśli Ekologicznej</title>
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
            title='Ośrodek Źródło'
            imageUrl='/images/bird.jpg'
          />

          <div className={classes.wrapper}>
            <PhotoCard name="Ośrodek Źródło" imageUrl='/images/zrodlo.jpg'>
              <>
                <Text span fw={700}>Położenie: </Text>
                Ośrodek znajduje się w Beskidzie Makowskim w pobliżu góry Kurczyna, we wsi Łękawica, gmina Stryszów. W bezpośredniej okolicy las oraz łąka, nieco dalej średniowieczne grodzisko, jaskinia Mysiorowa Dziura oraz Jezioro Mucharskie. W pobliżu domu znajduje się oczko wodne oraz miejsce na ogień.
                <Space h="xs" />
                <Text span fw={700}>Warunki: </Text>
                Do dyspozycji wyposażona kuchnia, jadalnia na 16 osób, salon z kominkiem, pokój do zajęć, pokój do medytacji, sypialnia (zbiorowa), dwie łazienki oraz dodatkowa ubikacja. Spanie na materacu z własnym śpiworem w wieloosobowej sali. Uwaga: słaby zasięg sieci telefonicznej oraz brak WiFi.
                <Space h="xs" />
                <Text span fw={700}>Adres: </Text>
                Łękawica 175, gmina Stryszów, 34-124 Klecza Górna
                <Space h="xs" />
                <Center>
                  <Link href="/warsztaty" passHref>
                    <Button>
                      Warsztaty
                    </Button>
                  </Link>
                </Center>
              </>
            </PhotoCard>
            <div className={classes.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10295.460163087464!2d19.57070753910457!3d49.82620170000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47167d4388c1bae9%3A0xd949a5f7a451335b!2zxYHEmWthd2ljYSAxNzUsIDM0LTEwMCDFgcSZa2F3aWNh!5e0!3m2!1sen!2spl!4v1670920826800!5m2!1sen!2spl"  
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}