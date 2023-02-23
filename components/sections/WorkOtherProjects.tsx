import MotionComponent from "../framerMotion/MotionComponent";
import WorkProjectCard from "../ui/WorkProjectCard";

interface Props {
  inView: boolean;
}

const WorkOtherProjects = ({ inView }: Props) => (
  <MotionComponent inView={inView} variant="opacity">
    <div className="w-full h-80 mt-14 grid grid-cols-4 gap-8">
      <WorkProjectCard project={{ slug: "seb-d", name: "Test project", category: "Category" }} />
      <WorkProjectCard project={{ slug: "seb-d", name: "Test project", category: "Category" }} />
      <WorkProjectCard project={{ slug: "seb-d", name: "Test project", category: "Category" }} />
      <WorkProjectCard project={{ slug: "seb-d", name: "Test project", category: "Category" }} />
    </div>
    <div className="w-full flex justify-end mt-8">
      <a className="bg-quaternary px-2 text-gray-700 underline cursor-pointer ">View the archive</a>
    </div>
  </MotionComponent>
);

export default WorkOtherProjects;
