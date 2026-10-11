import Layout from "@/components/Layout";
import AudienceCards from "@/components/AudienceCards";
import Eligibility from "@/components/Eligibility";
import useTitle from "@/hooks/useTitle";

const OpportunitiesPage = () => {
  useTitle(
    "Opportunities | Fin Growth India",
    "Flexible business-support opportunities for students, homemakers, freshers, job seekers, and working professionals aged 18 and above. Check eligibility and inquire with FGI."
  );
  return (
    <Layout>
      <AudienceCards />
      <Eligibility />
    </Layout>
  );
};

export default OpportunitiesPage;
