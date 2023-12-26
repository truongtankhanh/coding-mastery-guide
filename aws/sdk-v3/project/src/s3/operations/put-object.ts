import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { awsConfig } from "../config";

export async function putObject(
  params: PutObjectCommandInput
): Promise<PutObjectCommandOutput> {
  const s3Config = awsConfig;
  const s3Client = new S3Client(s3Config);

  const putObjectCommand = new PutObjectCommand(params);

  try {
    const data = await s3Client.send(putObjectCommand);
    return data;
  } catch (error) {
    throw new Error(`Error putting object: ${error}`);
  }
}
