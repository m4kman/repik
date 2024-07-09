"use client";
import { useFormStatus } from "react-dom";
import Spinner from "../spinner";

function FileInput() {
  const { pending } = useFormStatus();

  return (
    <>
      <label
        htmlFor="file-input"
        className={
          pending
            ? "flex cursor-not-allowed items-center justify-center rounded-xl bg-black/70 px-11 py-9 text-2xl font-semibold text-slate-100"
            : "flex cursor-pointer items-center justify-center rounded-xl bg-black px-11 py-9 text-2xl font-semibold text-slate-100 hover:bg-black/90"
        }
      >
        {pending ? (
          <span className="flex items-center justify-center">
            <Spinner />
            generating photo
          </span>
        ) : (
          "upload a photo"
        )}
      </label>
      <input
        type="file"
        name="file"
        id="file-input"
        accept="image/*"
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        hidden
        disabled={pending ? true : false}
      />
    </>
  );
}

export default FileInput;
