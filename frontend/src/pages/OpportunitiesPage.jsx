import Layout from "@/components/Layout";
import AudienceCards from "@/components/AudienceCards";
import Eligibility from "@/components/Eligibility";
import useTitle from "@/hooks/useTitle";

const OpportunitiesPage = () => {
  useTitle("Opportunities | Fin Growth India");
  return (
    <Layout>
      <AudienceCards />
      <Eligibility />
    </Layout>
  );
};

export default OpportunitiesPage;
