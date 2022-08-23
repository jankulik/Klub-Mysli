import { useState } from 'react';
import { Group, Collapse } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'

interface linksProps {
  links: { label: string; link: string; links?: { label: string; link: string }[] }[]
}

interface linkProps {
  label: string
  link: string
  links?: { label: string; link: string }[]
}

export function LinksGroup({ label, link, links }: linkProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(false);
  const items = (hasLinks ? links : []).map((subLink) => (
    <div className={styles.subLink} key={subLink.link}>
      <Link href={subLink.link}>
        <a>{subLink.label}</a>
      </Link>
    </div>
  ));

  return (
    <>
      <div onClick={() => setOpened((o) => !o)} className={hasLinks ? [styles.control, styles.collapsible].join(' ') : styles.control}>
        <Group position='apart' spacing={0}>
          <div>
            <Link href={link}>
              <a onClick={() => setOpened((o) => !o)}>{label}</a>
            </Link>
          </div>

          {hasLinks && (
            <IconChevronRight
              className={styles.chevron}
              size={14}
              stroke={2.5}
              style={{
                transform: opened ? `rotate(90deg)` : 'none',
              }}
            />
          )}
        </Group>
      </div>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

export default function Sidebar({ links }: linksProps) {
  const linksCombined = links.map((link) => <LinksGroup {...link} key={link.link} />);

  return (
    <div className={styles.menu}>
      {linksCombined}
    </div>
  )
}
