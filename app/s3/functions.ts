"use client";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const myClient = new S3Client({
  region: "default",
  endpoint: process.env.LIARA_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.BUCKET_ACCESS!,
    secretAccessKey: process.env.BUCKET_SECRET!,
  },
});

export async function add_to_bucket(
  file: Buffer,
  name: string,
  folder?: string
) {
  const params = {
    Body: file,
    Bucket: process.env.BucketNAME!,
    Key: !folder ? name : `${folder}/${name}`,
  };

  try {
    await myClient.send(new PutObjectCommand(params));
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
