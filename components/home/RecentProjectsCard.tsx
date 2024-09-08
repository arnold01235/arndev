import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon, VideoIcon } from "@/components/Icons";

interface ComponentProps {
  className?: string;
}

export default function Component({ className }: ComponentProps) {
  const projects = [
    {
      name: "Portfolio Website",
      description: "En nettside for å vise frem mine prosjekter og erfaringer.",
      technologies: ["Next.js", "React", "Node.js", "ShadCN", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/arnold01235/arndev",
      liveLink: "https://www.arndev.no/",
    },
    {
      name: "DCGAN Music Generator",
      description: "En maskinlæringsmodell som genererer piano noter ved hjelp av DCGAN.",
      technologies: ["Python", "Keras", "TensorFlow", "Pandas", "Numpy"],
      liveLink: "https://drive.google.com/drive/folders/1ykIuiEKCylOmIWo_4JWeJwkkuRvc78gd",
    },
    {
      name: "Logic Gate Simulator in Virtual Reality", 
      description: "En VR-applikasjon for å simulere logiske kretser og lære grunnleggende konsepter innenfor digitalteknikk.",
      technologies: ["Unity", "C#", "VR", "Blender"],
      videoLink: "https://www.youtube.com/watch?v=-Im7mCatrH8&list=PLCQsqddzN3OXv2dG6qPhqjltByVz4UO_0",
    },
  ];

  return (
    <Card className={`w-full max-w-3xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle>Nylige prosjekt</CardTitle>
        <CardDescription>Utdrag fra mine siste prosjekter</CardDescription>
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
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.liveLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.videoLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                      <VideoIcon className="mr-2 h-4 w-4" />
                      Video Demo
                    </a>
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
