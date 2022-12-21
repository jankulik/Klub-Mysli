import { useStyles } from './styles';
import { Title } from '@mantine/core';

interface QuestionCardProps {
  title?: string;
  children?: any;
}

export default function QuestionCard({ title, children }: QuestionCardProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.card}>
      {title != undefined &&
        <Title className={classes.title}>
          {title}
        </Title>
      }

      {(children.length != null || children.props.children != null) &&
        <div className={classes.content}>
          {children}
        </div>
      }
    </div>
  );
}
