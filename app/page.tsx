import Image from "next/image";
import AboutCard from "@/components/aboutCard";
import RecentProjects from "@/components/recentProjects";
export default function Home() {
  return (
    <main>
      <AboutCard />
      <RecentProjects />
    </main>
  );
}
