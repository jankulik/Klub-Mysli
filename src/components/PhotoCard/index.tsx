import { useStyles } from './styles';
import { Title, Image, Center, Space, Button, Collapse, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { useState, ReactNode } from 'react';

interface PhotoCardProps {
  children: any;
  name: string;
  imageUrl: string;
  collapsible?: ReactNode;
}

export default function PhotoCard({ children, name, imageUrl, collapsible }: PhotoCardProps) {
  const { classes } = useStyles();

  const [controlsOpened, setControlsOpened] = useState(false);

  return (
    <div className={classes.card}>
      <div className={classes.wrapper}>
        <div className={classes.image}>
          <Image
            alt={name}
            src={imageUrl}
            radius='md'
            height='100%'
          />
        </div>

        <div className={classes.content}>
          <Title
            order={2}
            className={classes.title}
          >
            {name}
          </Title>
          <Space h="sm" />

          {children}

          {collapsible != undefined &&
            <>
              <Space h="xs" />
              <Center>
                <Button
                  onClick={() => setControlsOpened((o) => !o)}
                  rightIcon={
                    <IconChevronRight
                      size={16}
                      style={{
                        transform: controlsOpened ? `rotate(90deg)` : 'none',
                        transition: '0.2s',
                      }}
                    />
                  }
                >
                  Zobacz szczegóły
                </Button>
              </Center>
            </>
          }
        </div>
      </div>

      {collapsible != undefined &&
        <Collapse in={controlsOpened} transitionDuration={500}>
          <Space h={20} />
          {collapsible}
        </Collapse>
      }
    </div>
  )
}
