import { useStyles } from './styles';
import { Title, Overlay } from '@mantine/core';
import Image from 'next/image';

interface TitleCardProps {
  title: string;
  imageUrl: string;
}

export default function TitleCard({ title, imageUrl }: TitleCardProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.card}>
      <Image
        src={imageUrl}
        layout='fill'
        objectFit='cover'
      />
      <Overlay color='#000' opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {title}
        </Title>
      </div>
    </div>
  );
}
