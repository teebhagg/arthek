import { client } from "../../../sanity/client";
import { ProfileInterface } from "../interface/profile";

export const getProfileData = async () => {
    const profileQuery = `*[_type == 'profile']`;
    const profileData: ProfileInterface[] = await client.fetch(profileQuery);
    return { profileData };
  };