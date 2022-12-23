import { useStyles } from './styles';
import { Title, Space } from '@mantine/core';

interface QuestionCardProps {
  title?: string;
  children?: any;
}

export default function QuestionCard({ title, children }: QuestionCardProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.card}>
      {title != undefined &&
        <>
          <Title
            order={2}
            className={classes.title}
          >
            {title}
          </Title>
          {(children.length != null || children.props.children != null) &&
            <Space h="sm" />
          }
        </>
      }

      {(children.length != null || children.props.children != null) &&
        <>
          {children}
        </>
      }
    </div>
  );
}
