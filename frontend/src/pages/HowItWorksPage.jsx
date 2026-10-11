import Layout from "@/components/Layout";
import HowItWorks from "@/components/HowItWorks";
import useTitle from "@/hooks/useTitle";

const HowItWorksPage = () => {
  useTitle(
    "How It Works | Fin Growth India",
    "From inquiry to opportunity: see FGI's six-step process — send your inquiry, initial review, guidance, verification, opportunity allocation, and begin your journey."
  );
  return (
    <Layout>
      <HowItWorks />
    </Layout>
  );
};

export default HowItWorksPage;
