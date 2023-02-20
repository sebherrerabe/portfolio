import Image from "next/image";
import Paragraph from "../design/Paragraph";
import Button from "../ui/Button";

const WorkMainProject = () => (
  <div className="w-full mt-12 flex items-center relative">
    <div className="absolute bg-quaternary z-10 w-1/2 border rounded border-primary shadow-xl p-4">
      <Paragraph level={2} className="text-gray-700 ">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.{" "}
      </Paragraph>
      <Button styleType="tertiary" className="mt-4">Check out my github</Button>
    </div>
    <div className="ml-auto relative flex justify-center">
      <div className="absolute w-[75%] h-[83%] bg-gray-700 mt-6 rounded-xl"></div>
      <Image src="/macbook.png" alt="" width={900} height={560} />
    </div>
  </div>
);

export default WorkMainProject;
