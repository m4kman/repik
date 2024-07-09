import Image from "next/image";
import heroPhoto from "@/public/assets/hero-photo.webp";
import { ArrowLeft, ArrowRight } from "@/app/ui/svgs";

function HeroImage() {
  return (
    <>
      <div className="absolute inset-0 mx-auto h-[60%] max-h-[450px] w-3/4 max-w-[1000px] -translate-y-1/4 rounded-full bg-cyan-700/70 blur-3xl" />
      <div className="hero-image-border relative isolate p-0.5">
        <Image
          src={heroPhoto}
          alt="Picture Comparison of Before and After"
          className="max-h-full max-w-full"
        />
        <div className="absolute left-0 top-0 -translate-x-10 -translate-y-20">
          <div className="mb-2 flex -translate-x-4 translate-y-1 -rotate-[28.4deg]">
            <span className="font-handwriting text-2xl font-bold text-gray-400">
              Before
            </span>
          </div>
          <ArrowRight />
        </div>
        <div className="absolute right-0 top-0 -translate-y-20 translate-x-10">
          <div className="mb-2 flex translate-x-4 translate-y-1 rotate-[28.4deg] justify-end">
            <span className="font-handwriting text-2xl font-bold text-gray-400">
              After
            </span>
          </div>
          <ArrowLeft />
        </div>
      </div>
    </>
  );
}

export default HeroImage;
