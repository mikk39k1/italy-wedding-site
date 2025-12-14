import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const praktiskInfoItems = [
  {
    title: "Mad og drikke",
    description: (
      <p>
        Mad og drikke på bryllupsdagen står vi for. Vi vil også sørge for indkøb af mad og drikke
        til resten af dagene, vi håber derfor at i kunne tænke jer at hjælpe os med at kunne handle
        ind ved at sende xxxkr til denne mobilepay box. <br /> <br />
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
      </p>
    ),
  },
  {
    title: "Parkering",
    description: "Der er mulighed for parkering af bil ved villaen.",
  },
  {
    title: "Svar udbedes",
    description: (
      <p>
        Send venligst jeres svar senest 28.02.2026 til: <br /> <br /> Lise -{" "}
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
        Området omkring villaen byder på natur, en lille by Sansepolcro hvor man kan finde
        supermarked, et lille bitte indkøbscenter og restauranter. Her er man meget velkommen til at
        udforske og opleve det lokale, også at spise på restauranterne i byen, vi vil bare gerne
        vide på dagen hvor mange spiser i villaen.
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
