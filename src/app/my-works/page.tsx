import React from 'react'

import Header from '@/components/common/header'
import {ProjectCard} from '@/components/home/projects_highlight'
import { getProjectData } from '@/utils/data/projects';

async function MyWorks() {
  const { projectData } = await getProjectData();
  return (
    <div className="max-w-7xl w-full p-6 space-y-16 md:space-y-24 mx-auto">
        <Header title="My Works" description="Showcase About Works" />

      <div className="w-full h-[0px] border border-neutral-400"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
        {projectData.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default MyWorks