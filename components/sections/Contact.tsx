import Paragraph from "../design/Paragraph";
import Section from "../ui/Section";
import Title from "../ui/Title";
import ContactCard from "./ContactCard";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => (
  <div className="bg-quaternary">
    <Section level={4} id="contact">
      <Title text="// contact" type="A" />
      <Paragraph className="mt-10 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur aspernatur corrupti eveniet voluptates quis porro
        explicabo eos magnam omnis sed illo delectus error culpa earum, tempore nostrum quisquam facilis?
      </Paragraph>
      <div className="flex w-full justify-between mt-10 pb-20">
        <ContactCard link="www.google.com" icon={faWhatsapp} text="WhatsApp" />
        <ContactCard link="www.google.com" icon={faEnvelope} text="E-mail" />
        <ContactCard link="www.google.com" icon={faLinkedin} text="LinkedIn" />
      </div>
    </Section>
  </div>
);

export default Contact;
