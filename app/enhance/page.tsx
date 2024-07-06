import { upload } from "@/app/actions";
import FileUpload from "@/app/ui/FileUpload";

function Home() {
  return (
    <div className="mt-32 grid place-items-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-11">
          <h1 className="hero-text-gradient max-w-[765px] bg-clip-text text-center text-[64px] font-bold leading-tight text-transparent">
            Rediscover the past in stunning detail
          </h1>
          <p className="text-xl font-medium text-slate-950/75">
            Upload a photo and let AI do the rest
          </p>
          <FileUpload />
          <span className="-translate-y-1 text-xs font-light italic text-slate-500">
            Note: We do not store any photos, at all.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
