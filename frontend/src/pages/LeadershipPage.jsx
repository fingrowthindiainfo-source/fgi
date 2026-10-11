import Layout from "@/components/Layout";
import Leadership from "@/components/Leadership";
import useTitle from "@/hooks/useTitle";

const LeadershipPage = () => {
  useTitle(
    "Leadership | Fin Growth India",
    "Meet Fin Growth India's leadership: Founder and Owner Vikram Nehra (Jaipur), Co-Founder Arsh Preet Singh (Lucknow), and Co-Founder Tannu Sharma (Kolkata)."
  );
  return (
    <Layout>
      <Leadership />
    </Layout>
  );
};

export default LeadershipPage;
