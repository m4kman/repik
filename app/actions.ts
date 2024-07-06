"use server";

export async function upload(formData: FormData) {
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const timestamp = Math.round(new Date().getTime() / 1000);

  // Signature for signing Cloudinary upload request
  const response = await fetch(process.env.URL + "/api/sign-image", {
    method: "POST",
    body: JSON.stringify({ paramsToSign: "justatest" }),
  });
  const { signature } = await response.json();

  console.log(signature);

  // TODO: POST CALL TO CLOUDINARY
}
