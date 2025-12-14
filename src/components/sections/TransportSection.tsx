export function TransportSection() {
  return (
    <section id="transport" className="flex flex-col px-6 py-16 sm:px-10 md:px-16 lg:px-24">
      <header>
        <h2 className="text-4xl tracking-wide text-gray-900 font-light mb-4">Transport</h2>
      </header>

      <h3 className="text-gray-900 text-xl font-semibold mb-2 mt-6">Fly:</h3>
      <p>Hvis man ønsker at flyve direkte, kan vi anbefale at flyve til Firenze Airport (FLR)</p>
      <p>Der findes to afgange på dagen direkte fra Kastrup til Firenze: 9:10 og 16:45.</p>
      <a
        className="underline font-semibold text-base my-2"
        href="https://www.skyscanner.dk/transport/fly/cph/flr/260921/260925/config/10694-2609210910--31901-0-11565-2609211130|11565-2609251955--31901-0-10694-2609252210?adultsv2=2&cabinclass=economy&childrenv2=&ref=home&rtn=1&outboundaltsenabled=false&inboundaltsenabled=false&preferdirects=false"
      >
        09:10 afgang
      </a>
      <a
        className="underline font-semibold text-base my-2"
        href="https://www.skyscanner.dk/transport/fly/cph/flr/260921/260925/config/10694-2609211645--31901-0-11565-2609211905|11565-2609251955--31901-0-10694-2609252210?adultsv2=2&cabinclass=economy&childrenv2=&ref=home&rtn=1&outboundaltsenabled=false&inboundaltsenabled=false&preferdirects=false"
      >
        16:45 afgang
      </a>

      <h3 className="text-gray-900 text-xl font-semibold mb-2 mt-6">Transport fra lufthavn:</h3>
      <p>
        Når vi komer tættere på og har et overblik over hvor mange flyver og lander på samme tid
        sørger vi for samlet transport fra lufthavnen til Villa Cungi hvor vi alle skal bo.
      </p>
    </section>
  );
}
