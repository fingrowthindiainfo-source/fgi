import Layout from "@/components/Layout";
import StartWork from "@/components/StartWork";
import useTitle from "@/hooks/useTitle";

const StartWorkPage = () => {
  useTitle(
    "Start Your Work | Fin Growth India",
    "Start your work with Fin Growth India. Submit a short five-field inquiry — name, city, email, phone, and age — and our team will review your details."
  );
  return (
    <Layout>
      <StartWork />
    </Layout>
  );
};

export default StartWorkPage;
