import Layout from "@/components/Layout";
import StartWork from "@/components/StartWork";
import useTitle from "@/hooks/useTitle";

const StartWorkPage = () => {
  useTitle("Start Your Work | Fin Growth India");
  return (
    <Layout>
      <StartWork />
    </Layout>
  );
};

export default StartWorkPage;
