import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComponentProps {
  className?: string;
}

export default function Component({ className }: ComponentProps) {
  return (
    <Card className={`w-full max-w-3xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Arnold Hansen</CardTitle>
        <p className="text-xl text-muted-foreground">Plattform utvikler</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Om meg</h2>
          <p className="text-muted-foreground">
          Jeg er en plattform utvikler for Brønnøysundregistrene, med lidenskap for teknologi og utvikling. Jobber hovedsakelig innen ELK-stacken, men har også erfaringer innen både front-end og back-end utvikling fra utdanning og personlige prosjekter.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Ferdigheter</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>Next.js</Badge>
            <Badge>Spring Boot</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>Java</Badge>
            <Badge>SQL</Badge>
            <Badge>NoSQL</Badge>
            <Badge>Git</Badge>
            <Badge>Docker</Badge>
            <Badge>Amazon Web Service</Badge>
            <Badge>Github Actions</Badge>
            <Badge>Elastic Search</Badge>
            <Badge>ECE</Badge>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Utdanning</h2>
          <div className="space-y-2">
            <div>
              <h3 className="font-medium">Bachelor i Dataingeniør</h3>
              <p className="text-sm text-muted-foreground">NTNU Trondheim, 2021 - 2024</p>
            </div>
            <div>
              <h3 className="font-medium">Forkurs for ingeniørutdanning</h3>
              <p className="text-sm text-muted-foreground">NTNU Trondheim, 2020 - 2021</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Erfaring</h2>
          <div className="space-y-2">
            <div>
              <h3 className="font-medium">Plattform utvikler, Brønnøysundregistrene</h3>
              <p className="text-sm text-muted-foreground">November 2024 - Nå</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Utvikle og vedlikeholde registerplattformen.</li>
                <li>Bruker ELK-stack (Elasticsearch, Logstash, Kibana) sammen med ECE for effektiv logghåndtering og overvåkning av plattformen.</li>
                <li>Dokumentere utviklingsprosesser og tekniske løsninger for fremtidlig bruk</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Sommervikar, Saksbehandler i Brønnøysundregistrene</h3>
              <p className="text-sm text-muted-foreground">Juni - August, 2022</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Behandlet endringsmeldinger for aksjeselskap.</li>
                <li>Utførte grundige gjennomganger av innsendte dokumenter for å sikre at de oppfylte gjeldende lovkrav og retningslinjer.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Sommerjobb, Avløser innen Gårdsbruk</h3>
              <p className="text-sm text-muted-foreground">Juni – August, 2020, 2021, 2023</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Utførte daglige oppgaver som foring, melking og stell av storfe.</li>
              </ul>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
