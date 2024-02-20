"use client";

import Header from "@/components/common/header";
import { getOneProjectData, getProjectData } from "@/utils/data/projects";
import { ProjectInterface } from "@/utils/interface/projects";
import { myPortableTextComponents } from "@/utils/portable_text_components";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { urlFor } from "../../../../sanity/client";

export default function ProjectDetails() {
  const [projectData, setProjectData] = useState<ProjectInterface>();
  const [projectList, setProjectList] = useState<ProjectInterface[]>();
  const params = useParams();
  useEffect(() => {
    const getData = async () => {
      console.log(params?.project);
      const { oneProjectData } = await getOneProjectData(
        params?.project.toString()
      );
      const { projectData } = await getProjectData();
      setProjectData(oneProjectData[0]);
      setProjectList(projectData);
      console.log(oneProjectData);
    };
    getData();
  }, []);
  if (projectData === undefined) {
    return (
      <div className="text-white text-center text-2xl py-24">Loading...</div>
    );
  }
  return (
    <div className="max-w-7xl w-full p-6 space-y-16 md:space-y-24 mx-auto mb-10 md:mb-24">
      <Header title="Project Details" description="Details About Project" />
      <div className="w-full h-[0px] border border-neutral-400"></div>
      <div className="space-y-10 md:space-y-24">
        <div className="w-full ratio-16x9 relative">
          <Image
            className="w-full ratio-16x9 rounded-lg object-cover"
            src={urlFor(projectData?.featuredImage).url()}
            alt="project-details"
            width={800}
            height={800}
          />
          {/* Center a div below i its parent */}
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/5">
            <p className="text-white text-[36px] md:text-[48px] lg:text-[64px] font-bold font-syne">
              Project Details
            </p>
          </div>
        </div>
        <div className="max-w-[750px] space-y-5 mx-auto">
          <div className="text-white text-[32px] font-bold font-syne capitalize leading-[38.40px]">
            Project Overview
          </div>
          <div className="text-slate-400 font-rubik">
            <PortableText
              value={projectData?.description}
              components={myPortableTextComponents}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            className="w-full h-full ratio-4x3 rounded-lg"
            src="https://unblast.com/wp-content/uploads/2021/10/UI-UX-Vector-Illustration.jpg"
          />
          <img
            className="w-full h-full ratio-4x3 rounded-lg"
            src="https://miro.medium.com/v2/resize:fit:1400/1*zT6FhDi6hB0uH6fO8ipmIw.png"
          />
        </div>
        <div className="space-y-5">
          <div className="text-center text-white text-[64px] font-bold font-syne">
            Other Projects
          </div>
          {/* Select at most 3 project except the current project using its id */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projectList?.slice(0, 3)?.map((project) => {
              if (project.slug?.current !== projectData?.slug?.current) {
                return (
                  <div className="space-y-5">
                    <Image
                      className="w-full h-full rounded-lg ratio-4x4 object-cover"
                      src={urlFor(project?.featuredImage).url()}
                      alt="project-details"
                      width={800}
                      height={800}
                    />
                    <div className="">
                      <div className="text-white text-2xl font-semibold font-['Sora'] capitalize leading-[28.80px]">
                        {project.title}
                      </div>
                      {/* <div className="text-neutral-400 text-lg font-normal font-rubik">
                        Branding
                      </div> */}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
