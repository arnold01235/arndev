import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Arnold Hansen</CardTitle>
        <p className="text-xl text-muted-foreground">Nyutdannet</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-muted-foreground">
            Passionate developer with 5 years of experience in creating robust web applications. 
            Skilled in both front-end and back-end technologies, with a keen eye for user experience.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>SQL</Badge>
            <Badge>Git</Badge>
            <Badge>Docker</Badge>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Utdanning</h2>
          <div className="space-y-2">
            <div>
              <h3 className="font-medium">Master of Computer Science</h3>
              <p className="text-sm text-muted-foreground">NTNU Trondheim, 2021-2024</p>
            </div>
            <div>
              <h3 className="font-medium">Bachelor of Software Engineering</h3>
              <p className="text-sm text-muted-foreground">State University, 2014-2018</p>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  )
}