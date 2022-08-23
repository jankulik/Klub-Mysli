import Image from 'next/image'
import Navbar from '../components/Navbar'
import { IconBrandFacebook, IconBrandYoutube } from '@tabler/icons';
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className={styles.bgWrapper}>
        <Image
          alt='Liść'
          src='/images/lisc1.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <Navbar />

      <div className={styles.wrapper}>
        {children}
      </div>

      <div className={styles.footer}>
        <span className={styles.footerText}>
          Copyright © 2022 Klub Myśli Ekologicznej
        </span>
        <div className={styles.footerIcon}>
          <Link href={'https://www.facebook.com/klubmyslieko'}>
            <a className={styles.link}><IconBrandFacebook size={30} stroke={1.1} color='white' /></a>
          </Link>
          <Link href={'https://www.youtube.com/channel/UCzDlbkITa9cQqW9bwRi4iOA'}>
            <a className={styles.link}><IconBrandYoutube size={30} stroke={1.1} color='white' /></a>
          </Link>
        </div>
      </div>
    </>
  )
}
