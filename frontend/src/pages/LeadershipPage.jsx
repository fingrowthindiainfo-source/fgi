import Layout from "@/components/Layout";
import Leadership from "@/components/Leadership";
import useTitle from "@/hooks/useTitle";

const LeadershipPage = () => {
  useTitle("Leadership | Fin Growth India");
  return (
    <Layout>
      <Leadership />
    </Layout>
  );
};

export default LeadershipPage;
