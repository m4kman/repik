"use client";
import { useState } from "react";
import FileUpload from "@/app/ui/FileUpload";
import ModelOutput from "@/app/ui/ModelOutput";
import downloadPhoto from "@/app/lib/download";

function Home() {
  const [originalPhoto, setOriginalPhoto] = useState("");
  const [restoredPhoto, setRestoredPhoto] = useState("");
  return (
    <div className="mt-32 grid place-items-center">
      <div className="flex max-h-full flex-col items-center gap-11">
        <h1 className="hero-text-gradient max-w-[765px] bg-clip-text text-center text-[64px] font-bold leading-tight text-transparent">
          Rediscover the past in stunning detail
        </h1>
        <p className="text-xl font-medium text-slate-950/75">
          Upload a photo and let AI do the rest
        </p>
        <FileUpload
          setRestoredPhoto={setRestoredPhoto}
          setOriginalPhoto={setOriginalPhoto}
        />
        <span className="-translate-y-1 text-xs font-light italic text-slate-500">
          Note: We do not store any photos, at all.
        </span>
      </div>
      <div className="mb-10 mt-20 flex flex-col gap-11">
        <ModelOutput
          originalPhoto={originalPhoto}
          restoredPhoto={restoredPhoto}
        />
        {restoredPhoto && (
          <button
            className="mx-auto flex max-w-fit cursor-pointer items-center justify-center rounded-lg bg-black px-5 py-4 text-lg font-medium text-slate-100 hover:bg-black/90"
            onClick={() => downloadPhoto(restoredPhoto, "restored-photo.png")}
          >
            Download
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
