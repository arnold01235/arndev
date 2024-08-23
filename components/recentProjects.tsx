import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon, VideoIcon } from "@/components/icons";

interface ComponentProps {
  className?: string;
}

export default function Component({ className }: ComponentProps) {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://ecommerce-platform-demo.com",
      videoLink: "https://www.youtube.com/watch?v=your_video_id_1",
    },
    {
      name: "Task Management App",
      description: "A Kanban-style task management application with team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/task-management-app",
      liveLink: "https://task-app-demo.com",
      videoLink: "https://www.youtube.com/watch?v=your_video_id_2",
    },
    {
      name: "Weather Forecast Dashboard",
      description: "An interactive weather dashboard with 7-day forecasts and location-based services.",
      technologies: ["React", "OpenWeatherMap API", "Chart.js"],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://weather-dashboard-demo.com",
      videoLink: "https://www.youtube.com/watch?v=your_video_id_3",
    },
  ];

  return (
    <Card className={`w-full max-w-3xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle>Recent Projects</CardTitle>
        <CardDescription>Highlights from my latest work</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                    <VideoIcon className="mr-2 h-4 w-4" />
                    Video Demo
                  </a>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
