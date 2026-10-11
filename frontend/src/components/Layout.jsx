import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Layout = ({ children, offset = true }) => (
  <>
    <Navbar />
    <main className={offset ? "pt-20" : ""}>{children}</main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Layout;
