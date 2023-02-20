import WorkProjectCard from "../ui/WorkProjectCard";

const WorkOtherProjects = () => (
  <div className="w-full h-80 mt-14 grid grid-cols-4 gap-8">
    <WorkProjectCard project={{slug: "seb-d", name: "Test project", category: "Category"}}/>
    <WorkProjectCard project={{slug: "seb-d", name: "Test project", category: "Category"}}/>
    <WorkProjectCard project={{slug: "seb-d", name: "Test project", category: "Category"}}/>
    <WorkProjectCard project={{slug: "seb-d", name: "Test project", category: "Category"}}/>
  </div>
);

export default WorkOtherProjects;
