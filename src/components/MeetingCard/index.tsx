import { useStyles } from './styles';
import { Title, Space, Text } from '@mantine/core';

interface MeetingCardProps {
  title: string;
  description: string[];
  topic?: string;
  date: string;
  individual?: boolean;
}

export default function MeetingCard({ title, description, topic, date, individual = false }: MeetingCardProps) {
  const { classes } = useStyles();

  return (
    <div
      className={classes.card}
      style={{
        width: individual ? '94vw' : undefined,
        maxWidth: individual ? '1000px' : undefined,
      }}
    >
      <Title
        order={2}
        className={classes.title}
      >
        {title}
      </Title>

      <div className={classes.content}>
        {description.map((text, index, array) => {
          return (
            <div key={text}>
              {text}

              {index + 1 != array.length &&
                <Space h="md" />
              }
            </div >
          );
        })}

        {topic != "" &&
          <>
            <Space h="md" />
            <Text fs="italic">
              {topic}
            </Text>
          </>
        }
      </div>

      <Title
        order={2}
        className={classes.date}
      >
        {date}
      </Title>
    </div>
  );
}
