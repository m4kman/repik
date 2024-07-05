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
          <button className="flex items-center justify-center rounded-xl bg-black px-11 py-9 text-2xl font-semibold text-slate-100 hover:bg-black/90">
            upload a photo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
