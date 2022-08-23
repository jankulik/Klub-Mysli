import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import NavItem from './NavItem'
import { Burger } from '@mantine/core'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Navbar.module.css'

interface sizeType {
  width: number | undefined;
  height: number | undefined;
}

const menuList = [
  { label: 'Strona Główna', link: '/' },
  { label: 'O Nas', link: '/o-nas' },
  { label: 'Spotkania', link: '/spotkania', links: [{ label: 'Zapowiedzi', link: '/zapowiedzi' }, { label: 'Archiwum', link: '/archiwum' }] },
  { label: 'Warsztaty', link: '/warsztaty' },
  { label: 'Edukacja', link: '/edukacja', links: [{ label: 'Ekologia', link: '/ekologia' }, { label: 'Ekopsychologia', link: '/ekopsychologia' }, { label: 'Kalkulator Śladu Ekologicznego', link: '/kalkulator' }] },
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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default function Navbar() {
  const [navActive, setNavActive] = useState(false)
  const [opened, setOpened] = useState(false)
  const size: sizeType = useWindowSize();

  const generateMenu = () => {
    if (size?.width && size.width < 1060) {
      return (
        <div className={navActive ? [styles.menuList, styles.active].join(' ') : styles.menuList}>
          <Sidebar links={menuList} />
        </div>
      )
    }

    return (
      <div className={styles.menuList}>
        {menuList.map((menu) => (
          <div onClick={() => { setNavActive(false) }} key={menu.label}>
            <NavItem links={[{ ...menu }]} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/'}>
          <div className={styles.logo}>
            <Image
              alt='Logo'
              src='/images/logo.jpg'
              width='100%'
              height='37.15%'
              layout='responsive'
              objectFit='contain'
            />
          </div>
        </Link>

        <div className={styles.menuBar}>
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
