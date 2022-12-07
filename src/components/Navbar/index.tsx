import Link from 'next/link';
import React, { useState } from 'react';
import { Burger } from '@mantine/core';
import NavItem from '../NavItem';
import Sidebar from '../Sidebar';
import { useStyles } from './styles';
import Logo from '../Logo';
import { useMediaQuery, useClickOutside, useDisclosure } from '@mantine/hooks';
import { IconHome, IconUser, IconUsers, IconHomeEco, IconNotebook, IconMail, IconCalendarTime } from '@tabler/icons';

const menuList = [
  { icon: IconHome, label: 'Strona Główna', link: '/' },
  { icon: IconUser, label: 'O Nas', link: '/o-nas' },
  { icon: IconUsers, label: 'Spotkania', links: [{ label: 'Zapowiedzi', link: '/zapowiedzi' }, { label: 'Archiwum', link: '/archiwum' }] },
  { icon: IconCalendarTime, label: 'Warsztaty', link: '/warsztaty' },
  { icon: IconNotebook, label: 'Edukacja', links: [{ label: 'Ekologia', link: '/ekologia' }, { label: 'Ekopsychologia', link: '/ekopsychologia' }, { label: 'Kalkulator Śladu Ekologicznego', link: '/kalkulator' }] },
  { icon: IconHomeEco, label: 'Ośrodek Źródło', link: '/osrodek-zrodlo' },
  { icon: IconMail, label: 'Kontakt', link: '/kontakt' }
]

export default function Navbar() {
  const { classes, cx, theme } = useStyles();

  const isSmallScreen = useMediaQuery(theme.fn.smallerThan('md').split('@media ')[1]);
  const [opened, { close, toggle }] = useDisclosure(false);
  const [sidebarRef, setSidebarRef] = useState<HTMLElement | null>(null);
  const [burgerRef, setBurgerRef] = useState<HTMLElement | null>(null);
  useClickOutside(() => close(), null, [sidebarRef!, burgerRef!]);

  const generateMenu = () => {
    if (isSmallScreen) {
      return (
        <div
          ref={r => setSidebarRef(r)}
          className={cx(classes.menuList, { [classes.active]: opened === true })}
        >
          <Sidebar
            handleClick={close}
            links={menuList}
          />
        </div>
      )
    }

    return (
      <div className={classes.menuList}>
        {menuList.map((menu) => (
          <div onClick={close} key={menu.label}>
            <NavItem links={[{ ...menu }]} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <Link href={'/'} passHref>
          <a className={classes.logo}>
            <Logo
              type={isSmallScreen ? 'logo-only' : 'logo-with-text'}
              size={50}
            />
          </a>
        </Link>

        <div className={classes.burger}>
          <Burger
            ref={r => setBurgerRef(r)}
            opened={opened}
            onClick={toggle}
          />
        </div>

        {generateMenu()}
      </nav>
    </header>
  )
}
