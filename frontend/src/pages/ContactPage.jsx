import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import useTitle from "@/hooks/useTitle";

const ContactPage = () => {
  useTitle(
    "Contact | Fin Growth India",
    "Contact Fin Growth India in Mansarovar, Jaipur. Email fingrowthindia.info@gmail.com, call or WhatsApp +91 9785868775, or send an inquiry through our short form."
  );
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
