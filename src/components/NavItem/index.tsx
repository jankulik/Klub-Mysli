import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons';
import { useStyles } from './styles';

interface linksProps {
  links: { label: string; link?: string; links?: { label: string; link: string }[] }[]
}

export default function NavItem({ links }: linksProps) {
  const { classes, cx } = useStyles();

  const items = links.map((link) => {
    const hasLinks = Array.isArray(link.links);

    if (hasLinks) {
      const subItems = link.links?.map((subLink) => {
        return (
          <div key={subLink.label}>
            <Link href={subLink.link} passHref>
              <a className={classes.link}>
                {subLink.label}
              </a>
            </Link>
          </div>
        )
      })

      return (
        <div key={link.label} className={classes.dropdown}>
          <a className={classes.link}>
            {link.label}
            <>&nbsp;</>
            <IconChevronDown size={14} stroke={2.5} />
          </a>
          <div className={classes.dropdownContent}>
            {subItems}
          </div>
        </div>
      )
    }

    return (
      <div key={link.label}>
        {link.link &&
          <Link href={link.link} passHref>
            <a className={classes.link}>
              {link.label}
            </a>
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
