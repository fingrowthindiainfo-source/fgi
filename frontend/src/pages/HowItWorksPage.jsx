import Layout from "@/components/Layout";
import HowItWorks from "@/components/HowItWorks";
import useTitle from "@/hooks/useTitle";

const HowItWorksPage = () => {
  useTitle("How It Works | Fin Growth India");
  return (
    <Layout>
      <HowItWorks />
    </Layout>
  );
};

export default HowItWorksPage;
