import Link from "next/link";
import Image from "next/image";
import heroPhoto from "@/public/assets/hero-photo.webp";

function Hero() {
  return (
    <section className="mt-32">
      <div className="flex flex-col items-center justify-center gap-11">
        <h1 className="max-w-[780px] bg-gradient-to-br from-slate-950 to-slate-500 bg-clip-text text-center text-[64px] font-bold text-transparent">
          Bring your old pictures to life using AI
        </h1>
        <p className="max-w-[450px] text-center text-lg font-medium text-slate-900/75">
          Stop deleting your pictures, revive them with the power of AI
        </p>
        <Link href="/enhance">
          <button className="flex items-center justify-center rounded-xl bg-black px-11 py-9 text-2xl font-semibold text-slate-100 hover:bg-black/90">
            repik your photos
          </button>
        </Link>
      </div>
      <div className="relative mt-48 flex items-center justify-center">
        <div className="absolute h-[450px] w-[1000px] -translate-y-1/4 rounded-full bg-cyan-700/70 blur-3xl" />
        <div className="hero-image-border isolate p-0.5">
          <Image
            src={heroPhoto}
            alt="Picture Comparison of Before and After"
            className="max-h-full max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
