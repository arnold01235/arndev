import ContactForm from '@/components/contact/ContactForm';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page of arndev",
};
const contact = () => {
    return (
        <ContactForm />
    );
}

export default contact;