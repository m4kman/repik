"use server";

export async function upload(formData: FormData) {
  const file = formData.get("file") as File;

  const timestamp = Math.round(new Date().getTime() / 1000);

  const API_KEY = process.env.CLOUDINARY_API_KEY;

  const params = {
    timestamp,
  };

  // Signature for signing Cloudinary upload request
  const sigResponse = await fetch(process.env.URL + "/api/sign-image", {
    method: "POST",
    body: JSON.stringify({ paramsToSign: params }),
  });
  const { signature } = await sigResponse.json();

  // POST CALL TO CLOUDINARY
  const myHeaders = new Headers();

  const auth = btoa(
    `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`,
  );
  myHeaders.append("Authorization", `Basic ${auth}`);

  const cloudinaryData = new FormData();
  cloudinaryData.append("file", file, file.name);
  cloudinaryData.append("signature", signature);
  cloudinaryData.append("api_key", API_KEY!);
  cloudinaryData.append("timestamp", timestamp.toString());

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: cloudinaryData,
  };

  const response = await fetch(
    process.env.CLOUDINARY_UPLOAD_API!,
    requestOptions,
  );
  if (!response.ok) console.log(response);
  const data = await response.json();
  console.log(data);
}
