import { client } from "../../../sanity/client";
import { ProjectInterface } from "../interface/projects";

export const getProjectData = async () => {
    const projectQuery = `*[_type == 'project']{...,client, categories[]->{...,title,_id}}`;
    const projectData: ProjectInterface[] = await client.fetch(projectQuery);
    return { projectData };
};