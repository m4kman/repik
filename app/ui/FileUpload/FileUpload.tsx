"use client";
import FileInput from "@/app/ui/FileInput";

function FileUpload({ setRestoredPhoto, setOriginalPhoto }: any) {
  async function handleSubmit(formData: FormData) {
    const response = await fetch("/api/generate", {
      method: "POST",
      body: formData,
    });

    const resData = await response.json();

    setOriginalPhoto(resData.uploadedImage);
    setRestoredPhoto(resData.modelImage);
  }

  return (
    <form action={handleSubmit}>
      <FileInput />
    </form>
  );
}

export default FileUpload;
