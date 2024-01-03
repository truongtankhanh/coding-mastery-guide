Dưới đây là hướng dẫn sử dụng AWS CDK để khởi tạo một dự án và cấu hình các tài nguyên như S3 buckets, Lambda functions và DynamoDB:

---

### Bước 1: Cài đặt và khởi tạo dự án

1. **Cài đặt AWS CDK:** Nếu chưa cài đặt, bạn có thể cài đặt bằng lệnh sau:

   ```bash
   npm install -g aws-cdk
   ```

2. **Tạo dự án AWS CDK:**
   ```bash
   mkdir my-cdk-project
   cd my-cdk-project
   cdk init app --language=typescript
   ```

---

### Bước 2: Cấu hình tài nguyên

Mở file `lib/my-cdk-project-stack.ts` và thêm mã sau:

#### _Ví dụ cấu hình S3 bucket, Lambda function và DynamoDB:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as path from "path";

export class MyCdkProjectStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo S3 Bucket
    const myBucket = new s3.Bucket(this, "MyBucket", {
      bucketName: "my-unique-bucket-name",
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Xóa bucket khi stack bị xóa
    });

    // Tạo Lambda Function
    const myLambda = new lambda.Function(this, "MyLambda", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset(path.join(__dirname, "lambda-handler")), // Thay 'lambda-handler' bằng thư mục chứa mã lambda
    });

    // Tạo DynamoDB Table
    const myTable = new dynamodb.Table(this, "MyTable", {
      tableName: "MyTable",
      partitionKey: { name: "ID", type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Xóa table khi stack bị xóa
    });

    // ... Cấu hình các tài nguyên khác nếu cần

    // Nếu cần kết nối tài nguyên với nhau, bạn có thể sử dụng các method của AWS CDK như myLambda.addEventSource() để kết nối Lambda với DynamoDB, S3, v.v.
  }
}
```

---

### Bước 3: Triển khai và kiểm tra

1. **Triển khai stack:**

   ```bash
   cdk deploy
   ```

   Lệnh này sẽ triển khai tất cả các tài nguyên được định nghĩa trong stack `MyCdkProjectStack`.

2. **Kiểm tra tài nguyên đã được tạo:**
   Sau khi triển khai thành công, bạn có thể kiểm tra trên AWS Management Console để xem các S3 bucket, Lambda function, DynamoDB table đã được tạo.

---

Đây chỉ là một ví dụ cơ bản về cách sử dụng AWS CDK để tạo các tài nguyên AWS. Bạn có thể tùy chỉnh và mở rộng dự án theo nhu cầu cụ thể của bạn.

---
