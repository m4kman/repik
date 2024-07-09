"use client";
import { upload } from "@/app/actions";

const initialState = {
  outputImage: {
    image: "",
  },
};

function FileUpload({ setRestoredPhoto, setOriginalPhoto }: any) {
  // const [state, formAction] = useFormState(upload, initialState);

  async function handleSubmit(data: FormData) {
    console.log(data);

    const response = await fetch("/api/generate", {
      method: "POST",
      body: data,
    });

    const resData = await response.json();
    setOriginalPhoto(resData.uploadedImage);
    setRestoredPhoto(resData.modelImage);
  }

  return (
    <form action={handleSubmit}>
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
