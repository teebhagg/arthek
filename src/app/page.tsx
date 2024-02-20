import AboutHighlights from "@/components/home/about_highlight";
import HeroSection from "@/components/home/hero_section";
import ProjectHighlights from "@/components/home/projects_highlight";
import Testimonials from "@/components/home/testimonials";
import { getHomeData } from "@/utils/data/home";
import { getProfileData } from "@/utils/data/profile";
import Image from "next/image";

export default async function Home() {
  const { homeData } = await getHomeData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-4 lg:px-8 text-white space-y-64">
      <HeroSection title={homeData[0].header} />
      <AboutHighlights avatar={homeData[0].heroSection.avatar} description={homeData[0].heroSection.body} title={homeData[0].heroSection.title} />
      <ProjectHighlights projectData={homeData[0].projectsHighlight} />
      <Testimonials />
    </main>
  );
}
