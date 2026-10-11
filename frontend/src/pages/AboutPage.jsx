import Layout from "@/components/Layout";
import About from "@/components/About";
import useTitle from "@/hooks/useTitle";

const AboutPage = () => {
  useTitle(
    "About Us | Fin Growth India",
    "Learn about Fin Growth India (FGI), established May 2026 in Mansarovar, Jaipur — our mission, vision, and business-support work across banking, KYC, customer support, and data management."
  );
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;
