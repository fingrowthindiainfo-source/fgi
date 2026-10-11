import Layout from "@/components/Layout";
import Services from "@/components/Services";
import useTitle from "@/hooks/useTitle";

const ServicesPage = () => {
  useTitle(
    "Our Services | Fin Growth India",
    "Explore FGI's business-support services: banking support, KYC-related operations, broking support, credit card support, customer support, and data entry and management."
  );
  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default ServicesPage;
