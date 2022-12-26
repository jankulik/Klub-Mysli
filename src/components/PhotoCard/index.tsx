import { useStyles } from './styles';
import { Title, Center, Space, Button, Collapse } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { useState, ReactNode, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';

interface PhotoCardProps {
  children: any;
  title: string;
  imageUrl: string;
  collapsible?: ReactNode;
}

export default function PhotoCard({ children, title, imageUrl, collapsible }: PhotoCardProps) {
  const { classes, theme } = useStyles();

  const [controlsOpened, setControlsOpened] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    contentRef.current != null && setContentHeight(contentRef.current.clientHeight);
    console.log(contentRef.current.clientHeight);
  });

  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <div className={classes.card}>
      <div className={classes.wrapper}>
          <div
            className={classes.image}
            style={{
              height: isSmallScreen ? 'calc(94vw - 30px)' : contentHeight,
              width: isSmallScreen ? 'calc(94vw - 30px)' : 'fit-content',
            }}
          >

            <Image
              src={imageUrl}
              alt={`Zdjęcie, na którym jest ${title}`}
              layout='fill'
              objectFit='cover'
            />
          </div>

        <div
          className={classes.content}
          ref={contentRef}
        >
          <Title
            order={2}
            className={classes.title}
          >
            {title}
          </Title>
          <Space h='sm' />

          {children}

          {collapsible != undefined &&
            <>
              <Space h='xs' />
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
