import {
  S3Client,
  GetObjectCommand,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { awsConfig } from "../config";

export async function getObject(
  bucketName: string,
  objectKey: string
): Promise<GetObjectCommandOutput> {
  const s3Config = awsConfig;

  const s3Client = new S3Client(s3Config);

  const getObjectParams = {
    Bucket: bucketName,
    Key: objectKey,
  };

  const getObjectCommand = new GetObjectCommand(getObjectParams);

  try {
    const data = await s3Client.send(getObjectCommand);
    return data;
  } catch (error) {
    throw new Error(`Error getting object: ${error}`);
  }
}
