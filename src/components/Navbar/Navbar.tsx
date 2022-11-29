import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Burger } from '@mantine/core';
import NavItem from '../NavItem/NavItem';
import Sidebar from '../Sidebar/Sidebar';
import { useStyles } from './Navbar.styles';
import Logo from '../Logo'
import { useMediaQuery } from "@mantine/hooks";


type sizeType = {
  width?: number;
  height?: number;
}

const menuList = [
  { label: 'Strona Główna', link: '/' },
  { label: 'O Nas', link: '/o-nas' },
  { label: 'Spotkania', links: [{ label: 'Zapowiedzi', link: '/zapowiedzi' }, { label: 'Archiwum', link: '/archiwum' }] },
  { label: 'Warsztaty', link: '/warsztaty' },
  { label: 'Edukacja', links: [{ label: 'Ekologia', link: '/ekologia' }, { label: 'Ekopsychologia', link: '/ekopsychologia' }, { label: 'Kalkulator Śladu Ekologicznego', link: '/kalkulator' }] },
  { label: 'Ośrodek Źródło', link: '/osrodek-zrodlo' },
  { label: 'Kontakt', link: '/kontakt' }
]

function useWindowSize(): sizeType {
  const [windowSize, setWindowSize] = useState<sizeType>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default function Navbar() {
  const { classes, cx, theme } = useStyles();
  const isSmallScreen = useMediaQuery(theme.fn.smallerThan("sm").split("@media ")[1]);

  const [navActive, setNavActive] = useState(false)
  const [opened, setOpened] = useState(false)
  const size: sizeType = useWindowSize();

  const generateMenu = () => {
    if (size?.width && size.width < 992) {
      return (
        <div className={cx(classes.menuList, { [classes.active]: navActive === true })}>
          <Sidebar links={menuList} />
        </div>
      )
    }

    return (
      <div className={classes.menuList}>
        {menuList.map((menu) => (
          <div onClick={() => { setNavActive(false) }} key={menu.label}>
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
              type={isSmallScreen ? "logo-only" : "logo-with-text"}
              size={50}
            />
          </a>
        </Link>

        <div className={classes.menuBar}>
          <Burger
            opened={opened}
            onClick={() => {
              setOpened((o) => !o)
              setNavActive(!navActive)
            }}
          />
        </div>

        <>{generateMenu()}</>
      </nav>
    </header>
  )
}
