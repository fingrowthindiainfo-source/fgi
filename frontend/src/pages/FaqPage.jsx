import Layout from "@/components/Layout";
import Faq from "@/components/Faq";
import useTitle from "@/hooks/useTitle";

const FaqPage = () => {
  useTitle("FAQs | Fin Growth India");
  return (
    <Layout>
      <Faq />
    </Layout>
  );
};

export default FaqPage;
