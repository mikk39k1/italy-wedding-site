export function ToastMasterSection() {
  return (
    <section
      id="toast-master"
      className="flex flex-col gap-6 px-6 py-16 sm:px-10 md:px-16 lg:px-24"
    >
      <header>
        <h2 className="text-4xl tracking-wide text-gray-900 font-light mb-4">Toastmaster</h2>
        <p className="mt-2 text-gray-600 text-base">
          Vores søde toastmaster Helene sørger for overblik over taler og indslag på selve
          bryllupsdagen.
        </p>
      </header>
      <div className="space-y-4 text-sm text-gray-700">
        <p className="text-base">
          Har du lyst til at sige et par ord eller planlægger et indslag, så tag endelig kontakt, så
          bliver det lagt ind i programmet.
        </p>
        <div className="flex flex-col rounded-lg border border-gray-200 bg-white/70 p-4 gap-y-2 mt-6">
          <p className="text-base font-semibold text-gray-900">Helene Duch Kjær</p>

          <p className="text-base text-gray-600">
            SMS til:{" "}
            <a className="underline font-semibold text-base" href="sms:26181162">
              29 89 25 08
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
