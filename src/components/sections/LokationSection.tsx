export function LokationSection() {
  return (
    <section
      id="lokation"
      className="flex flex-col bg-[#fffdfb] px-6 py-16 sm:px-10 md:px-16 lg:px-24"
    >
      <header>
        <h2 className="text-4xl font-light tracking-wide text-gray-900 mb-6">Lokation</h2>
      </header>
      <p className="text-gray-900 text-lg font-semibold mb-2">Villa Cungi</p>
      <div className="space-y-4 text-base text-gray-700 mb-4">
        <p>V. dei Sassi Rossi, 52037 Sansepolcro AR, Italy</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <iframe
          title="Lokation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.3919076573993!2d12.12672987686297!3d43.59838097110483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132c776315152b3d%3A0xd991aa755a05bb80!2sVilla%20Cungi!5e0!3m2!1sen!2sdk!4v1765723411320!5m2!1sen!2sdk"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
