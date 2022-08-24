import Link from 'next/link'
import { IconChevronDown } from '@tabler/icons';
import styles from '../styles/NavItem.module.css'
import { isStringObject } from 'util/types';

interface linksProps {
  links: { label: string; link?: string; links?: { label: string; link: string }[] }[]
}

export default function NavItem({ links }: linksProps) {

  const items = links.map((link) => {
    const hasLinks = Array.isArray(link.links);

    if (hasLinks) {
      const subItems = link.links?.map((subLink) => {
        return (
          <div key={subLink.label}>
            <Link href={subLink.link}>
              <a className={styles.link}>{subLink.label}</a>
            </Link>
          </div>
        )
      })

      return (
        <div className={styles.dropdown} key={link.label}>
          <div className={[styles.highlight, styles.link].join(' ')}>
            {link.label}
            <>&nbsp;</>
            <IconChevronDown size={14} stroke={2.5} />
          </div>
          <div className={styles.dropdownContent}>
            {subItems}
          </div>
        </div>
      )
    }

    return (
      <div key={link.label}>
        {link.link &&
          <Link href={link.link}>
            <a className={[styles.highlight, styles.link].join(' ')}>{link.label}</a>
          </Link>
        }
      </div>
    )
  })

  return (
    <div>
      {items}
    </div>
  )
}
