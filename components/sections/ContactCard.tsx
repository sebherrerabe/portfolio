import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {
  link: string;
  icon: IconProp;
  text: string;
}

const ContactCard = ({ icon, link, text }: Props) => (
  <Link href={link} className="flex flex-col items-center">
    <FontAwesomeIcon icon={icon} className="text-gray-200" size="7x" />
    <span className="text-gray-300 mt-4">{text}</span>
  </Link>
);

export default ContactCard;