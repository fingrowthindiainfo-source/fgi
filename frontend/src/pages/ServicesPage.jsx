import Layout from "@/components/Layout";
import Services from "@/components/Services";
import useTitle from "@/hooks/useTitle";

const ServicesPage = () => {
  useTitle("Our Services | Fin Growth India");
  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default ServicesPage;
