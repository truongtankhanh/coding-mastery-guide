import { S3ClientConfig } from "@aws-sdk/client-s3";

export const awsConfig = (vars: NodeJS.ProcessEnv): S3ClientConfig => {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = vars;

  if (!AWS_ACCESS_KEY_ID || AWS_SECRET_ACCESS_KEY)
    return { region: vars.AWS_REGION };

  return {
    region: vars.AWS_REGION,
    credentials: {
      accessKeyId: vars.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: vars.AWS_SECRET_ACCESS_KEY || "",
    },
  };
};
