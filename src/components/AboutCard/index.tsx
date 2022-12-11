import { useStyles } from './styles';
import { Title, Space, Image } from '@mantine/core';

interface AboutCardProps {
  children: string;
  name: string;
  imageUrl: string;
}

export default function AboutCard({ children, name, imageUrl }: AboutCardProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <Image
          alt={name}
          src={imageUrl}
          radius='md'
          height={370}
        />
      </div>

      <div className={classes.content}>
        <Title size={32}>{name}</Title>
        <Space h="sm" />
        {children}
      </div>
    </div>
  )
}
