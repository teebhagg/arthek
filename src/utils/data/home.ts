import { client } from "../../../sanity/client";
import { HomeInterface } from "../interface/home";

export const getHomeData = async () => {
    const homeQuery = `*[_type == 'home']{...,projectsHighlight[]->{...,categories[]->{_id,title}}}`;
    const homeData: HomeInterface[] = await client.fetch(homeQuery);
    return { homeData };
  };