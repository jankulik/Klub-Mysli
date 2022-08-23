import Link from 'next/link'
import { IconChevronDown } from '@tabler/icons';
import styles from '../styles/NavItem.module.css'

interface linksProps {
  links: { label: string; link: string; links?: { label: string; link: string }[] }[]
}

export default function NavItem({ links }: linksProps) {

  const items = links.map((link) => {
    const hasLinks = Array.isArray(link.links);

    if (hasLinks) {
      const subItems = link.links?.map((subLink) => {
        return (
          <div key={subLink.link}>
            <Link href={subLink.link}>
              <a className={styles.link}>{subLink.label}</a>
            </Link>
          </div>
        )
      })

      return (
        <div className={styles.dropdown} key={link.link}>
          <Link href={link.link}>
            <a className={[styles.highlight, styles.link].join(' ')}>
              {link.label}
              {hasLinks && <><>&nbsp;</><IconChevronDown size={14} stroke={2.5} /></>}
            </a>
          </Link>
          <div className={styles.dropdownContent}>
            {subItems}
          </div>
        </div>
      )
    }

    return (
      <div key={link.link}>
        <Link href={link.link}>
          <a className={[styles.highlight, styles.link].join(' ')}>{link.label}</a>
        </Link>
      </div>
    )
  })

  return (
    <div>
      {items}
    </div>
  )
}
