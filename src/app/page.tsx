import { HomeProjects } from "./home/components/ProjectsSection/HomeProjects";
import { HomeAboutHero } from "./home/components/AboutHeroSection/HomeAboutHero";
import { HomeHero } from "./home/components/HeroSection/HomeHero";
import { HomeContacts } from "./home/components/ContactSection/HomeContacts";
import { Contacts } from "./contacts/page";
import { Projects } from "./projects/Projects";
import { Blog } from "./blog/Blog";

export default function Home() {
  return (
    <div
      className="
        w-screen h-full
        flex flex-col 
        bg-background dark:bg-background
      "
    >
      <HomeHero />
      <HomeAboutHero />
      <HomeProjects />
      <HomeContacts />
    </div>
  );
}
