import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { ProjectInterface } from "@/utils/interface/projects";
import { urlFor } from "../../../sanity/client";
import Image from "next/image";
import Link from "next/link";

// Project Highlights Component
interface ProjectHighlightsProps {
  projectData: ProjectInterface[];
}
const ProjectHighlights: React.FC<ProjectHighlightsProps> = (
  props: ProjectHighlightsProps
) => {
  const { projectData } = props;
  return (
    <div className="max-w-7xl w-full p-6 mx-auto space-y-[80px]">
      <div className="text-center space-y-10">
        <div className="text-center text-white text-[64px] font-bold font-['Syne']">
          My Projects Highlight
        </div>
        <Button className="border border-orange-400 bg-transparent hover:bg-orange-500 rounded-full space-x-5">
        <Link href="/my-works" className="p-7 flex space-x-5">
          <p className="text-white font-light">Explore More</p>
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
        {projectData.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlights;

// Project Card Component
export const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  console.log(urlFor(project.featuredImage));
  return (
    <Link href={`/projects/${project.slug?.current}`} className="w-full">
    <div className="rounded-lg flex-col justify-end items-start gap-8 inline-flex border-2 p-4 border-orange-400 border-opacity-0 hover:border-opacity-100 transition-all">
      <div className="flex-col justify-center items-center inline-flex">
        <Image
          className="rounded-md ratio-4x3 object-cover w-full h-full"
          src={urlFor(project.featuredImage).url()}
          alt="project"
          width={500}
          height={600}
        />
      </div>
      <div className="self-stretch h-[179px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="justify-start items-center gap-8 inline-flex">
          <div className="text-white text-2xl font-bold font-['Syne'] leading-loose">
            {project.title}
          </div>
          <div className="w-12 h-[0px] border border-orange-400"></div>
        </div>
        <div className="w-full flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="text-zinc-600 text-sm font-normal font-['Rubik'] leading-snug tracking-tight">
              Client:
            </div>
            <div className="text-white text-sm font-normal font-['Rubik'] leading-snug tracking-tight">
              Ms Jones{" "}
            </div>
          </div>
          <div className="w-full justify-start items-start gap-4 inline-flex">
            <div className="text-zinc-600 text-sm font-normal font-['Rubik'] leading-snug tracking-tight">
              Work:
            </div>
            <div className="w-full inline-flex gap-5 break-normal text-white text-sm font-normal font-['Rubik'] leading-snug tracking-tight">
              {project.categories.map((category) => (
                <div key={category._id}>{category.title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
