import Navbar from '../Navbar';
import { useStyles } from './styles';
import Footer from '../Footer';

interface LayoutProps {
  children: any;
  imageUrl: string;
}

export default function Layout({ children, imageUrl }: LayoutProps) {
  const { classes } = useStyles();

  return (
    <>
      <Navbar />

      <div
        className={classes.wrapper}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {children}
      </div>

      <Footer />
    </>
  );
}
