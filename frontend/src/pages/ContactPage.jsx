import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import useTitle from "@/hooks/useTitle";

const ContactPage = () => {
  useTitle("Contact | Fin Growth India");
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
