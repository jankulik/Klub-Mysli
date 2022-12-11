import Image from 'next/image';
import Navbar from '../Navbar';
import { useStyles } from './styles';
import Footer from '../Footer';

export default function Layout({ children }: { children: any }) {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      
      <div className={classes.wrapper}>
        {children}
      </div>

      <Footer />
    </div>
  )
}
