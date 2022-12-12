import Layout from '../components/Layout';
import Head from 'next/head';
import AboutCard from '../components/AboutCard';
import { Text, Space } from '@mantine/core';
import { useStyles } from '../styles/osrodek-zrodlo.styles';

export default function OsrodekZrodlo() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>O Nas | Klub Myśli Ekologicznej</title>
      </Head>

      <Layout>
        <div className={classes.parallax}>
          <div className={classes.wrapper}>
            <AboutCard name="Ośrodek Źródło" imageUrl='/images/zrodlo.jpg'>
              <>
                <Text span fw={700}>Położenie: </Text>
                Ośrodek znajduje się w Beskidzie Makowskim w pobliżu góry Kurczyna, we wsi Łękawica, gmina Stryszów. W bezpośredniej okolicy las oraz łąka, nieco dalej średniowieczne grodzisko, jaskinia Mysiorowa Dziura oraz Jezioro Mucharskie. W pobliżu domu znajduje się oczko wodne oraz miejsce na ogień.
                <Space h="xs" />
                <Text span fw={700}>Warunki: </Text>
                Do dyspozycji wyposażona kuchnia, jadalnia na 16 osób, salon z kominkiem, pokój do zajęć, pokój do medytacji, sypialnia (zbiorowa), dwie łazienki oraz dodatkowa ubikacja. Spanie na materacu z własnym śpiworem w wieloosobowej sali. Uwaga: słaby zasięg sieci telefonicznej oraz brak WiFi.
                <Space h="xs" />
                <Text span fw={700}>Adres: </Text>
                Łękawica 175, gmina Stryszów, 34-124 Klecza Górna
              </>
            </AboutCard>
          </div>
        </div>
      </Layout>
    </>
  );
}