import Layout from "@/components/Layout";
import Faq from "@/components/Faq";
import useTitle from "@/hooks/useTitle";

const FaqPage = () => {
  useTitle(
    "FAQs | Fin Growth India",
    "Answers about FGI opportunities: who can inquire, remote work, device needs, time commitments, compensation transparency, and what the inquiry form collects."
  );
  return (
    <Layout>
      <Faq />
    </Layout>
  );
};

export default FaqPage;
