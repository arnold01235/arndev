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
        githubUrl='https://github.com/your-repo-url'
        liveUrl='https://your-live-demo-url'
        youtubeUrl='https://your-video-demo-url'
        imageUrl='/images/Arndev.png'
        details={`Denne portfolio-nettsiden ble utviklet med Next.js og React for å vise frem mine prosjekter og erfaringer. Ved å bruke ShadCN og Tailwind CSS fikk jeg en ren og moderne design. Nettsiden er også responsiv, slik at den ser bra ut på alle enheter. Jeg brukte Vercel for å deploye nettsiden, noe som gjorde det enkelt å oppdatere og vedlikeholde.

            Hovedårsaken til at jeg opprettet denne portfoliosiden var for å enkelt holde oversikt over mine prosjekter, spesielt de som ikke er tilgjengelige på GitHub. I tillegg ønsket jeg å styrke mine ferdigheter innen front-end utvikling, siden jeg primært har jobbet med back-end utvikling og plattformutvikling i forskjellige prosjekter.`}
        date='Sommer 2024'
        imagePosition='right'
      />
      
      {/*Logic Gate simulator*/}
      <ProjectCard 
      title='Logic Gate Simulator in Virtual Reality' 
      description='En VR-applikasjon for å simulere logiske kretser og lære grunnleggende konsepter innenfor digitalteknikk.'
      technologies={["Unity", "C#", "VR", "Blender"]}
      githubUrl='https://github.com/your-repo-url'
      liveUrl='https://your-live-demo-url'
      youtubeUrl='https://your-video-demo-url'
      imageUrl='/images/Logicgate.png'
      details={`Her så jobbet jeg sammen med en student for å utvikle en simulator for å lage og teste logiske kretser i VR. Målet med dette prosjektet var for å gjøre læringen av logiske kretser mer interaktiv og visuell. Ved hjelp av verktøyene Unity tilbyr hadde jeg muligten til å lage en vr applikasjon relativt lett. For å skape modellene brukte vi Blender, et gratis 3D-modelleringsverktøy. Slik kunne vi lage enkle modeller av de logiske portene som AND, OR, NOT og XOR.

          Resultatet ble en applikasjon som lar brukeren lage logiske kretser ved å plassere ned portene og koble de sammen. Utfordringen med dette prosjektet var å lage en intuitivt opplevelse for brukeren. Jeg har lite erfaring med VR spill, så det ble litt utfordrende å lage en god brukeropplevelse når det kommer til måten man bevenger seg og interagerer med objektene i spillet.

          Alt i alt var dette et morsomt prosjekt å jobbe med, og jeg lærte mye om VR. For å se en video demo av applikasjonen kan du trykk på knappen over`}
      date='Vinter 2023'
      imagePosition='left'
      />
        
        {/*DCGAN Music Generator*/}
        <ProjectCard 
        title='DCGAN Music Generator' 
        description='En maskinlæringsmodell som genererer piano noter ved hjelp av DCGAN. Denne modellen ble trent på en datasett av piano noter og kan generere nye noter basert på det den har lært. 
        Ved å gjøre om midi-filer til bilder, kan modellen lære seg mønstrene i musikken og generere nye noter som høres lignede.'
        technologies={["Python", "Keras", "TensorFlow", "Pandas", "Numpy"]}
        githubUrl=''
        liveUrl=''
        youtubeUrl=''
        imageUrl='/images/DCGAN.png'
        details={`I dette prosjektet jobbet jeg sammen med to andre studenter for å utforske om GAN kan brukes til å generere musikk. GAN er en type maskinlæringsmodell som består av to deler: en generator og en diskriminator. Begge partene trener hverandre for å generere realistiske data. Vi brukte DCGAN, en type GAN som er spesielt designet for å generere bilder.
            
            Hovedideen bak prosjektet var å gjøre om midi-filer til bilder, deretter trene DCGAN på disse bildene for å generere nye bilder. Disse bildene ble deretter konvertert tilbake til midi-filer for å høre på resultatet. Vi trente modellen på et datasett på forskjellige sjangre av musikk, og resultatene varierte fra sjanger til sjanger. F.eks modellen slet med å generere musikk av Mozart grunnet til notene var mer komplekse enn andre sjangre. Den klarte derimot å generere musikk fra et datasett av nintendo-spillmusikk, grunnet til at notene er mer repetitive og enklere å lære.
            
            For å lytte på resultatene kan man trykke på knappen over`}
        date = 'Høst 2023'
        imagePosition='right'
        />
        

        </div>
        </main>
        
    );
    
}

export default projects;