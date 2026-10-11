import Layout from "@/components/Layout";
import About from "@/components/About";
import useTitle from "@/hooks/useTitle";

const AboutPage = () => {
  useTitle("About Us | Fin Growth India");
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;
