import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons';
import { useStyles } from './NavItem.styles';

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
            <Link href={subLink.link}>
              <a className={classes.link}>{subLink.label}</a>
            </Link>
          </div>
        )
      })

      return (
        <div className={classes.dropdown} key={link.label}>
          <div className={cx(classes.highlight, classes.link)}>
            {link.label}
            <>&nbsp;</>
            <IconChevronDown size={14} stroke={2.5} />
          </div>
          <div className={classes.dropdownContent}>
            {subItems}
          </div>
        </div>
      )
    }

    return (
      <div key={link.label}>
        {link.link &&
          <Link href={link.link}>
            <a className={cx(classes.highlight, classes.link)}>{link.label}</a>
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
