import Header from "./header";
import Footer from "./footer";
import { GoogleTagManager } from '@next/third-parties/google'


const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <GoogleTagManager gtmId="GTM-PXFLTXQ4" />
      <Footer />

    </>
  );
};

export default Layout;
