import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const praktiskInfoItems = [
  {
    title: "Økonomi",
    description: (
      <p>
        Vi vil gerne være helt åbne omkring økonomien, for vi ved godt, at det koster både tid og
        penge at være en del af et bryllup som dette. Endnu et stort TAK for, at I har lyst til at
        være med. <br /> <br />
        Villaen og de fire overnatninger er betalt af os. <br />
        <br /> Fly/transport til Italien er for egen regning. Transport fra lufthavnen til villaen
        er som udgangspunkt også for egen regning, medmindre vi finder en god løsning på fælles
        transport. Mere info om dette kommer senere.
        <br />
        <br /> Mad og drikke er som udgangspunkt også betalt af os, men for at få det hele til at
        hænge sammen, beder vi ydmygt om et bidrag på <br />
        <span className="font-semibold">400 kr. pr. gæst.</span> <br />
        <br />
        Til dette har vi lavet en MobilePay-box:
        <br />
        <span className="text-base mb-2">
          Link:{" "}
          <a
            className="underline font-semibold"
            href="https://qr.mobilepay.dk/box/1c8a1dd6-b90d-432b-b75b-57a0a392a949/pay-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            til box
          </a>{" "}
        </span>
        <br />
        Nummer: <span className="font-semibold">5367PD</span>
      </p>
    ),
  },
  {
    title: "Mad og drikke",
    description: (
      <p>
        Vi sørger for indkøb af mad og drikke til alle dagene, så der er gode råvarer til vores
        fælles måltider. <br />
        Og igen: meld endelig ind, hvis der er en ret, du drømmer om at lave!
      </p>
    ),
  },
  {
    title: "Parkering",
    description: "Der er gratis parkering ved villaen.",
  },
  {
    title: "Svar udbedes",
    description: (
      <p>
        Giv os venligst besked om, hvorvidt I kan komme, senest 30.06.2026 <br /> <br /> Lise -{" "}
        <a className="underline font-semibold text-base" href="sms:29165655">
          29 16 56 55
        </a>{" "}
        eller Mikkel -{" "}
        <a className="underline font-semibold text-base" href="sms:28404215">
          28 40 42 15
        </a>
      </p>
    ),
  },

  {
    title: "Området",
    description: (
      <p className="text-base leading-relaxed">
        Området byder på smuk natur og den nærliggende by Sansepolcro med indkøb og restauranter. I
        er selvfølgelig velkomne til at gå på opdagelse og opleve det lokale.
        <br /> <br /> Villaen har en privat pool, som I kan bruge under hele opholdet.
      </p>
    ),
  },
];

export function PraktiskInfoSection() {
  return (
    <section
      id="praktisk-info"
      className="flex flex-col gap-6 bg-[#fffdfb] px-6 py-16 sm:px-10 md:px-16 lg:px-24"
    >
      <header>
        <h2 className="text-4xl tracking-wide text-gray-900 font-light mb-2">Praktisk info</h2>
      </header>

      <Accordion type="single" collapsible defaultValue="Dresscode">
        {praktiskInfoItems.map((item) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger className="text-lg font-semibold tracking-wide ">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-800 ">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
