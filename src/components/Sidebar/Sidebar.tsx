import { useState } from 'react';
import { Group, Collapse, ThemeIcon } from '@mantine/core';
import { IconChevronRight, TablerIcon } from '@tabler/icons';
import Link from 'next/link';
import { useStyles } from './Sidebar.styles';

interface SidebarProps {
  handleClick(): void;
  links: {
    icon: TablerIcon;
    label: string;
    link?: string;
    links?: {
      label: string;
      link: string
    }[]
  }[];
}

interface LinkProps {
  handleClick(): void;
  icon: TablerIcon;
  label: string;
  link?: string;
  links?: {
    label: string;
    link: string
  }[];
}

export function LinksGroup({ handleClick, icon: Icon, label, link, links }: LinkProps) {
  const { classes, cx } = useStyles();

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(false);

  const items = (hasLinks ? links : []).map((subLink) => (
    <Link key={subLink.label} href={subLink.link} passHref>
      <a onClick={() => handleClick()}>
        <div className={classes.subLink}>
          {subLink.label}
        </div>
      </a>
    </Link>
  ));

  return (
    <>
      {hasLinks ?
        <>
          <div onClick={() => setOpened((o) => !o)} className={cx(classes.control, classes.collapsible)}>
            <Group position='apart' spacing={0}>
              <Group spacing={10}>
                <ThemeIcon variant='light' size={30}>
                  <Icon size={18} />
                </ThemeIcon>
                <div>
                  {label}
                </div>
              </Group>
              <IconChevronRight
                className={classes.chevron}
                size={14}
                stroke={2.5}
                style={{
                  transform: opened ? `rotate(90deg)` : 'none',
                }}
              />
            </Group>
          </div>
          <Collapse in={opened}>{items}</Collapse>
        </> :
        <>
          {link &&
            <Link href={link} passHref>
              <a onClick={() => handleClick()}>
                <div className={classes.control}>
                  <Group spacing={10}>
                    <ThemeIcon variant='light' size={30}>
                      <Icon size={18} />
                    </ThemeIcon>
                    {label}
                  </Group>
                </div>
              </a>
            </Link>
          }
        </>
      }
    </>
  );
}

export default function Sidebar({ handleClick, links }: SidebarProps) {
  const { classes } = useStyles();

  const linksCombined = links?.map((link) => <LinksGroup handleClick={handleClick} {...link} key={link.label} />);

  return (
    <div className={classes.menu}>
      {linksCombined}
    </div>
  )
}
