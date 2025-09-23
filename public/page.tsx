export default function Home() {
  return (
    <div style={{
      backgroundImage: "url('/images/bryllupsblomst-new.png')",
      backgroundSize: 'cover',
      backgroundPosition: '78% 10%',
      backgroundRepeat: 'no-repeat',
    }} 
    className="relative h-screen w-full flex flex-col items-center justify-center bg-black">

      <div className="absolute bottom-1/5 right-4 flex flex-col items-end justify-center">
        <h1 className="text-4xl font-light text-right text-white">LISE & MIKKEL</h1>
        <h2 className="text-2xl text-right text-white mr-2">Bryllupsfest</h2>
        <p className="text-right text-small mb-8 text-white mr-2">Mere info kommer snart</p>
      </div>

      {/* <Image src="/images/bryllupsblomst.png" width={300} height={300} alt="Bryllupsblomst" /> */}
    </div>
  );
}
