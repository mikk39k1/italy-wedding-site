export function TransportSection() {
  return (
    <section id="transport" className="flex flex-col px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <header>
        <h2 className="text-4xl tracking-wide text-gray-900 font-light mb-4">Transport</h2>
      </header>

      <p>Vi kører derned i bil - sig til hvis man vil joine os på roadtrip! (I egen bil)</p>
      <p>
        Hvis man ønsker at flyve, går der direkte fly fra Københavns Lufthavn (CPH) til Firenze
        Airport (FLR). <br /> <br />
        Som det ser ud nu, findes der to direkte afgange.
        <br />
        <br />
      </p>
      <a
        className="underline font-semibold text-base my-2"
        target="_blank"
        href="https://www.skyscanner.dk/transport/fly/cph/flr/260921/260925/config/10694-2609210910--31901-0-11565-2609211130|11565-2609251955--31901-0-10694-2609252210?adultsv2=2&cabinclass=economy&childrenv2=&ref=home&rtn=1&outboundaltsenabled=false&inboundaltsenabled=false&preferdirects=false"
      >
        09:10 afgang
      </a>
      <a
        className="underline font-semibold text-base my-2"
        target="_blank"
        href="https://www.skyscanner.dk/transport/fly/cph/flr/260921/260925/config/10694-2609211645--31901-0-11565-2609211905|11565-2609251955--31901-0-10694-2609252210?adultsv2=2&cabinclass=economy&childrenv2=&ref=home&rtn=1&outboundaltsenabled=false&inboundaltsenabled=false&preferdirects=false"
      >
        16:45 afgang
      </a>

      <h3 className="text-gray-900 text-xl font-semibold mb-2 mt-6">Transport til Villa Cungi</h3>
      <p>
        Når vi kommer tættere på og har et overblik over jeres ankomsttider i lufthavnen, undersøger
        vi mulighederne for fælles transport fra Firenze lufthavn.
        <br /> <br /> Det er også muligt at tage tog en del af vejen og herfra arrangere fælles
        transport videre. Giv gerne besked, så snart I kender jeres ankomsttidspunkt, så vi kan
        koordinere det hele.
      </p>
    </section>
  );
}
