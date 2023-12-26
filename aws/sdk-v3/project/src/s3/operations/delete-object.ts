// aws-operations.ts

import {
  S3Client,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { awsConfig } from "../config";

export async function deleteObject(
  params: DeleteObjectCommandInput
): Promise<DeleteObjectCommandOutput> {
  const s3Config = awsConfig;
  const s3Client = new S3Client(s3Config);

  const deleteObjectCommand = new DeleteObjectCommand(params);

  try {
    const data = await s3Client.send(deleteObjectCommand);
    return data;
  } catch (error) {
    throw new Error(`Error deleting object: ${error}`);
  }
}
