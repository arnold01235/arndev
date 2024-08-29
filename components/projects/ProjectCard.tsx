import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { GithubIcon, ExternalLinkIcon, VideoIcon } from "@/components/Icons";

import { MountainIcon } from "@/components/Icons"

interface ProjectShowcaseProps {
  title: string
  description: string
  technologies?: string[] // Optional with a default value
  githubUrl?: string // Optional
  liveUrl?: string // Optional
  youtubeUrl?: string // Optional
  imageUrl?: string // Optional
  details?: string // Optional with a default value
  date?: string
  imagePosition?: "left" | "right" // New prop for image position
}

export default function ProjectShowcase({
  title = "",
  description = "",
  technologies = [], // Default to an empty array if not provided
  githubUrl = "",
  liveUrl = "",
  youtubeUrl = "",
  imageUrl = "",
  details = "", // Default text if not provided
  date = "",
  imagePosition = "left", // Default to "left"
}: ProjectShowcaseProps) {
  return (
    <Card className="w-full max-w-5xl mx-auto mb-5">
      <div className={`md:flex ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className={`flex flex-col ${imageUrl ? 'md:w-1/2' : 'w-full'}`}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardTitle>{date}</CardTitle>
            <CardDescription>
              {description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {technologies.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {youtubeUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <VideoIcon className="mr-2 h-4 w-4" />
                    YouTube
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
        {imageUrl && (
          <div className={`md:w-1/2 relative ${imagePosition === "right" ? "md:border-l" : "md:border-r"} border-b`}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <Image
                src={imageUrl}
                alt={`${title} preview`}
                fill
                className="absolute inset-0 object-contain"
              />
            </div>
          </div>
        )}
      </div>
      <CardFooter className="flex flex-col items-start mt-4">
        <h3 className="text-lg font-semibold mb-2">Project Details</h3>
        <p className="text-muted-foreground">
          {details.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </CardFooter>
    </Card>
  );
}
