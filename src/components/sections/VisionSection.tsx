export function VisionSection() {
  return (
    <section
      id="vision"
      className="flex flex-col gap-6 bg-[#fffdfb] px-6 py-16 sm:px-10 md:px-16 lg:px-24"
    >
      <header className="max-w-xl">
        <h2 className="mt-6 mb-4 text-4xl tracking-wide text-gray-900 font-light">Vision</h2>
      </header>

      <div className="flex flex-col gap-4 w-full">
        <p className="text-gray-900 w-full text-wrap">
          Vi ønsker at samle alle vores tætteste venner og familie sammen for at fejre vores
          bryllup. Vi øsnker en uge med hygge, og at man...
        </p>
        <p className="text-gray-900 w-full text-wrap">
          Det vi ønsker os allermest er, at holde en dejlig bryllupsfest sammen med jer. Derudover
          drømmer vi om at komme ud og opleve mere af verden sammen. Derfor ønsker vi os ingen
          vaser, køkkenmaskiner eller lignende.
        </p>
      </div>
    </section>
  );
}
