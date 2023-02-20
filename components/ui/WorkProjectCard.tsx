import { IProject } from "@/types/landing_page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Heading from "../design/Heading";
import Paragraph from "../design/Paragraph";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  project: IProject;
}

const WorkProjectCard = ({ project }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="shadow-xl hover:shadow-2xl transition-all duration-200 ease-in-out outline outline-transparent hover:outline-gray-300 rounded flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-full h-56 bg-gray-300 rounded-t"></div>
      <div className="grow bg-gray-700 rounded-b p-4 flex">
        <div className="flex flex-col">
          <Heading level={4} text={project.name} />
          <Paragraph className="mt-2" level={3}>
            {project.category}
          </Paragraph>
        </div>
        <div className="flex grow justify-end items-center">
          <FontAwesomeIcon
            icon={faChevronRight}
            size="3x"
            className={`${isHovering ? "opacity-30" : "opacity-0"} duration-200 ease-in-out transition-opacity`}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkProjectCard;
