import { useStyles } from './styles';
import { Button, Title } from '@mantine/core';
import Link from 'next/link';

interface CardProps {
  children: any;
  title: string;
  documentUrl?: string;
  videoId?: string;
}

export default function Card({ children, title, documentUrl, videoId }: CardProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.card}>
      <Title className={classes.title}>
        {title}
      </Title>

      {documentUrl != undefined &&
        <Link href={documentUrl} passHref>
          <Button size="lg">
            Pobierz bezpłatny pdf
          </Button>
        </Link>
      }

      {videoId != undefined &&
        <div className={classes.video}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      }

      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}
