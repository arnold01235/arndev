import ProjectCard from '@/components/projects/ProjectCard';
import { Card } from '@/components/ui/card';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project page of arndev",
};


const projects = () => {
    return (
        <main className="gap-4 p-4 h-auto max-w-7xl mx-auto">
        <div>
        
        <h1 className="text-4xl font-bold text-center">NB. Holder fortsatt på å ordne linkene og legge til flere prosjekter</h1>
        
        {/*Portfolio Website*/}
        <ProjectCard 
        title='Portfolio Website' 
        description='En nettside for å vise frem mine prosjekter og erfaringer.'
        technologies={["Next.js", "React", "Node.js", "ShadCN", "Tailwind CSS", "Vercel"]}
        githubUrl='https://github.com/arnold01235/arndev'
        imageUrl='/images/Arndev.png'
        details={`Denne portfolio-nettsiden ble utviklet med Next.js og React for å vise frem mine prosjekter og erfaringer. Ved å bruke ShadCN og Tailwind CSS fikk jeg en ren og moderne design. Nettsiden er også responsiv, slik at den ser bra ut på alle enheter. Jeg brukte Vercel for å deploye nettsiden, noe som gjorde det enkelt å oppdatere og vedlikeholde.

            Hovedårsaken til at jeg opprettet denne portfoliosiden var for å enkelt holde oversikt over mine prosjekter, spesielt de som ikke er tilgjengelige på GitHub. I tillegg ønsket jeg å styrke mine ferdigheter innen front-end utvikling, siden jeg primært har jobbet med back-end utvikling og plattformutvikling i forskjellige prosjekter.`}
        date='Sommer 2024'
        imagePosition='right'
      />

        {/*Bachelor oppgave*/}
        <ProjectCard 
        title='Bachelorprosjekt' 
        description='En fullstack web applikasjon for å håndtere og arkivere fraktbrev for et firma.'
        technologies={["Next.js", "React", "Node.js", "MongoDB", "Express", "Vercel", "Amazon EC2", "Docker"]}
        imageUrl='/images/Hera.png'
        details={`I mitt bachelorprosjekt jobbet jeg sammen en to andre for å utvikle en fullstack webapplikasjon for Hera Solution AS. Her så måtte vi bygge en web app fra grunnen av basert på Hera sine tidligere systemer. Jeg fikk ansvaret for en del av plattform utviklingen og back-end utviklingen, som inkluderer database design, API utvikling og designet av CI/CD pipelinen.
            
            I tillegg skrev vi om problemstillingen "Hvordan kan SCRUM og OWASP Web Security Testing Framework an kombineres for å fremme integrering av sikkerhet i den iterative utviklingsprosessen for webapplikasjoner" Dette arbeidet ga meg et godt innblik i hvordan man kan utvikle med sikkerhet i fokus i alle faser. Jeg fikk også verdifull erfaring med å jobbe i et team og kommunisere med kunden for å forstå deres behov og krav.`}
        date='Høst 2024'
        imagePosition='left'
      />
      
      {/*Logic Gate simulator*/}
      <ProjectCard 
      title='Logic Gate Simulator in Virtual Reality' 
      description='En VR-applikasjon for å simulere logiske kretser og lære grunnleggende konsepter innenfor digitalteknikk.'
      technologies={["Unity", "C#", "VR", "Blender"]}
      youtubeUrl='https://www.youtube.com/watch?v=-Im7mCatrH8&list=PLCQsqddzN3OXv2dG6qPhqjltByVz4UO_0'
      imageUrl='/images/Logicgate.png'
      details={`Her så jobbet jeg sammen med en student for å utvikle en simulator for å lage og teste logiske kretser i VR. Målet med dette prosjektet var for å gjøre læringen av logiske kretser mer interaktiv og visuell. Ved hjelp av verktøyene Unity tilbyr hadde jeg muligten til å lage en vr applikasjon relativt lett. For å skape modellene brukte vi Blender, et gratis 3D-modelleringsverktøy. Slik kunne vi lage enkle modeller av de logiske portene som AND, OR, NOT og XOR.

          Resultatet ble en applikasjon som lar brukeren lage logiske kretser ved å plassere ned portene og koble de sammen. Utfordringen med dette prosjektet var å lage en intuitivt opplevelse for brukeren. Jeg har lite erfaring med VR spill, så det ble litt utfordrende å lage en god brukeropplevelse når det kommer til måten man bevenger seg og interagerer med objektene i spillet.

          Alt i alt var dette et morsomt prosjekt å jobbe med, og jeg lærte mye om VR. For å se en video demo av applikasjonen kan du trykk på knappen over`}
      date='Vinter 2023'
      imagePosition='right'
      />
        
        {/*DCGAN Music Generator*/}
        <ProjectCard 
        title='DCGAN Music Generator' 
        description='En maskinlæringsmodell som genererer piano noter ved hjelp av DCGAN. Denne modellen ble trent på en datasett av piano noter og kan generere nye noter basert på det den har lært. 
        Ved å gjøre om midi-filer til bilder, kan modellen lære seg mønstrene i musikken og generere nye noter som høres lignede.'
        technologies={["Python", "Keras", "TensorFlow", "Pandas", "Numpy"]}
        liveUrl='https://drive.google.com/drive/folders/1ykIuiEKCylOmIWo_4JWeJwkkuRvc78gd'
        imageUrl='/images/DCGAN.png'
        details={`I dette prosjektet jobbet jeg sammen med to andre studenter for å utforske om GAN kan brukes til å generere musikk. GAN er en type maskinlæringsmodell som består av to deler: en generator og en diskriminator. Begge partene trener hverandre for å generere realistiske data. Vi brukte DCGAN, en type GAN som er spesielt designet for å generere bilder.
            
            Hovedideen bak prosjektet var å gjøre om midi-filer til bilder, deretter trene DCGAN på disse bildene for å generere nye bilder. Disse bildene ble deretter konvertert tilbake til midi-filer for å høre på resultatet. Vi trente modellen på et datasett på forskjellige sjangre av musikk, og resultatene varierte fra sjanger til sjanger. F.eks modellen slet med å generere musikk av Mozart grunnet til notene var mer komplekse enn andre sjangre. Den klarte derimot å generere musikk fra et datasett av nintendo-spillmusikk, grunnet til at notene er mer repetitive og enklere å lære.
            
            For å lytte på resultatene kan du trykke på knappen over. NB de generte lyd filene er 10 sekunder lange og kan variere i kvalitet.`}
        date = 'Høst 2023'
        imagePosition='left'
        />
        

        </div>
        </main>
        
    );
    
}

export default projects;