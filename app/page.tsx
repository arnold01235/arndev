import AboutCard from "@/components/home/AboutCard";
import RecentProjects from "@/components/home/RecentProjectsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of arndev",
};

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-auto max-w-7xl mx-auto">
      <div className="md:col-span-2 ">
        <AboutCard />
      </div>
      <div className="md:col-span-1">
        <RecentProjects className="h-full" />
      </div>
    </main>
  );
}
