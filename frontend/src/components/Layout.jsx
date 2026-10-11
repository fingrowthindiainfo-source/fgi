import Navbar from "@/components/Navbar";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Layout = ({ children, offset = true }) => (
  <>
    <Navbar />
    <main className={offset ? "pt-20" : ""}>{children}</main>
    <TrustStrip />
    <Footer />
    <FloatingButtons />
  </>
);

export default Layout;
