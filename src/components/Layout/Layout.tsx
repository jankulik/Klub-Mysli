import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import { IconBrandFacebook, IconBrandYoutube } from '@tabler/icons';
import Link from 'next/link';
import { useStyles } from './Layout.styles';

export default function Layout({ children }: { children: any }) {
  const { classes, cx } = useStyles();

  return (
    <>
      <div className={classes.bgWrapper}>
        <Image
          alt='Liść'
          src='/images/lisc1.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <Navbar />

      <div className={classes.wrapper}>
        {children}
      </div>

      <div className={classes.footer}>
        <span className={classes.footerText}>
          © 2022 Klub Myśli Ekologicznej
        </span>
        <div className={classes.footerIcon}>
          <Link href={'https://www.facebook.com/klubmyslieko'}>
            <a className={classes.link}><IconBrandFacebook size={30} stroke={1.1} color='white' /></a>
          </Link>
          <Link href={'https://www.youtube.com/channel/UCzDlbkITa9cQqW9bwRi4iOA'}>
            <a className={classes.link}><IconBrandYoutube size={30} stroke={1.1} color='white' /></a>
          </Link>
        </div>
      </div>
    </>
  )
}
