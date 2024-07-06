"use client";

import { upload } from "@/app/actions";

function FileUpload() {
  return (
    <form action={upload}>
      <label
        htmlFor="file-input"
        className="flex cursor-pointer items-center justify-center rounded-xl bg-black px-11 py-9 text-2xl font-semibold text-slate-100 hover:bg-black/90"
      >
        upload a photo
      </label>
      <input
        type="file"
        name="file"
        id="file-input"
        accept="image/*"
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        hidden
      />
    </form>
  );
}

export default FileUpload;
