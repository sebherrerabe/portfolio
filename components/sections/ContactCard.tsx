import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {
  link: string;
  icon: IconProp;
  text: string;
}

const ContactCard = ({ icon, link, text }: Props) => (
  <Link
    href={link}
    className="flex flex-col items-center px-16 lg:px-20 py-5 transition-all rounded-xl bg-gradient-to-br from-white/5 to-white/30 backdrop-blur-sm border border-white/20 hover:border-tertiary hover:shadow-2xl"
  >
    <FontAwesomeIcon icon={icon} className="text-gray-200 text-[5rem] sm:text-[7rem] md:text-[4rem] lg:text-[8rem]"/>
    <span className="text-gray-300 mt-4 text-sm sm:text-base">{text}</span>
  </Link>
);

export default ContactCard;
