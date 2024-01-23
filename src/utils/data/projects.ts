import { client } from "../../../sanity/client";
import { ProjectInterface } from "../interface/projects";

export const getProjectData = async () => {
    const projectQuery = `*[_type == 'project'] | order(_createdAt) | {...,client, categories[]->{...,title,_id}}`;
    const projectData: ProjectInterface[] = await client.fetch(projectQuery);
    return { projectData };
};
export const getOneProjectData = async (id: string) => {
    const projectQuery = `*[_type == 'project' && slug.current == '${id}']{...,client, categories[]->{...,title,_id}}`;
    const oneProjectData: ProjectInterface[] = await client.fetch(projectQuery);
    return { oneProjectData };
};
