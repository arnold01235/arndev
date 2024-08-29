import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-5">
      <CardHeader>
        <CardTitle>Kontakt meg</CardTitle>
        <CardDescription>Fyll ut skjemaet nedenfor, så tar jeg kontakt med deg så snart som mulig.</CardDescription>
      </CardHeader>
      <CardContent>
        <form 
          action="https://formspree.io/f/mdknbwrv" 
          method="POST" 
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Navn</Label>
            <Input id="name" name="name" placeholder="Skriv inn ditt navn" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-post</Label>
            <Input id="email" name="email" type="email" placeholder="Skriv inn din e-postadresse" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Melding</Label>
            <Textarea id="message" name="message" placeholder="Skriv inn din melding" className="min-h-[150px]" required />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
