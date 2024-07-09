import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request) {
  const apiKey = process.env.REPLICATE_API_TOKEN;

  const replicate = new Replicate({
    auth: apiKey,
  });

  const { imgInput } = await request.json();

  const input = {
    img: imgInput.image,
  };

  const output = await replicate.run(process.env.REPLICATE_MODEL_URL, {
    input,
  });
  const outputImage = {
    image: output,
  };
  return NextResponse.json({ outputImage });
}
