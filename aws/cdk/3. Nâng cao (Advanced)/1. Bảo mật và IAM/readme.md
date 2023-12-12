Hãy bắt đầu với việc định nghĩa và cách hoạt động của IAM Policies, sau đó là các Security Best Practices và cách áp dụng chúng trong AWS CDK:

---

1. [IAM Policies](#iam-policies)
2. [Security Best Practices](#security-best-practices)

---

### IAM Policies:

#### **Định nghĩa:**

- IAM Policies trong AWS (Identity and Access Management Policies) là các tập hợp các quyền hoặc hạn chế được gắn liền với các tài nguyên hoặc người dùng trong AWS, quy định quyền truy cập và hoạt động được phép hay bị từ chối.

---

#### **Cách hoạt động:**

- Sử dụng AWS CDK để tạo và quản lý IAM Policies và Roles trong mã nguồn.
- Xác định quyền truy cập (permissions) thông qua Policy Documents, điều này đặc tả những gì được phép hoặc bị từ chối.
- Gán Policies cho IAM Roles, Users hoặc Groups trong AWS để quản lý quyền truy cập.

---

#### _Ví dụ:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";

export class MyIAMStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo một IAM Policy
    const myPolicy = new iam.Policy(this, "MyPolicy", {
      statements: [
        new iam.PolicyStatement({
          actions: ["s3:GetObject"],
          resources: ["arn:aws:s3:::my-bucket/*"],
        }),
        // Thêm các statements khác nếu cần
      ],
    });

    // Tạo một IAM Role và gán Policy cho Role
    const myRole = new iam.Role(this, "MyRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });
    myRole.attachInlinePolicy(myPolicy);
  }
}
```

---

### Security Best Practices:

#### **Định nghĩa:**

- Security Best Practices là các nguyên tắc và quy tắc tốt nhất trong việc bảo mật hệ thống và ứng dụng, áp dụng nhằm giảm thiểu rủi ro và bảo vệ dữ liệu trước các mối đe dọa bảo mật.

---

#### **Cách hoạt động:**

- Sử dụng các phương pháp bảo mật như mã hóa dữ liệu, quản lý quyền truy cập chính xác, theo dõi và giám sát hoạt động hệ thống, tự động hóa các quy trình bảo mật, và nhiều hơn nữa.
- Trong AWS CDK, áp dụng các Best Practices bảo mật bằng cách sử dụng các tính năng như Encryption at Rest, Encryption in Transit, sử dụng KMS (Key Management Service) để quản lý khóa, sử dụng IAM để quản lý quyền truy cập, v.v.

---

#### _Ví dụ:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as kms from "aws-cdk-lib/aws-kms";

export class MySecurityStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo một S3 Bucket với mã hóa dữ liệu ở trạng thái nghỉ
    const myBucket = new s3.Bucket(this, "MyBucket", {
      encryption: s3.BucketEncryption.KMS_MANAGED,
      encryptionKey: new kms.Key(this, "MyEncryptionKey", {
        enableKeyRotation: true,
      }),
    });
  }
}
```

---

Trong ví dụ trên, chúng ta sử dụng AWS CDK để tạo một S3 Bucket với mã hóa được quản lý bằng KMS, áp dụng một trong các Best Practices để bảo vệ dữ liệu khi ở trạng thái nghỉ.

---
