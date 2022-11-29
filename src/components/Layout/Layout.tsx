import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import { IconBrandFacebook, IconBrandYoutube } from '@tabler/icons';
import Link from 'next/link';
import { useStyles } from './Layout.styles';
import Footer from '../Footer/Footer';

export default function Layout({ children }: { children: any }) {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />

      <div className={classes.bgWrapper}>
        <Image
          alt='Liść'
          src='/images/lisc1.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>

      <div className={classes.wrapper}>
        {children}
      </div>

      <Footer />
    </div>
  )
}
