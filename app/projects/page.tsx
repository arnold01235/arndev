import ProjectCard from '@/components/projects/ProjectCard';

const projects = () => {
    return (
        <div>
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
            
            For å lytte på resultatene kan man trykke på linken under`}
        />
        </div>
    );
}

export default projects;