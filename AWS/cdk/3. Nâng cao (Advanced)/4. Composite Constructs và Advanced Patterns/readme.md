1. [Composite Constructs](#composite-constructs)
2. [Advanced Design Patterns](#advanced-design-patterns)

---

### Composite Constructs:

#### **Định nghĩa:**

- Composite Constructs trong AWS CDK là việc tạo ra các Constructs phức tạp hơn, bao gồm nhiều tài nguyên, giúp tổ chức mã nguồn và triển khai dễ dàng hơn.

---

#### **Cách hoạt động:**

- Xây dựng các Constructs tùy chỉnh lớn hơn bao gồm nhiều tài nguyên và Constructs có sẵn trong AWS CDK.
- Sử dụng `Construct` để tạo các Composite Constructs bằng cách kết hợp nhiều tài nguyên lại với nhau để tạo ra một đơn vị quản lý lớn.

---

#### _Ví dụ:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

// Composite Construct gồm S3 Bucket và DynamoDB Table
export class MyCompositeConstruct extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    // Tạo S3 Bucket
    const myBucket = new s3.Bucket(this, "MyBucket", {
      // ... cấu hình khác
    });

    // Tạo DynamoDB Table
    const myTable = new dynamodb.Table(this, "MyTable", {
      // ... cấu hình khác
    });
  }
}
```

---

### Advanced Design Patterns:

#### **Định nghĩa:**

- Advanced Design Patterns trong AWS CDK là việc áp dụng các mô hình thiết kế phức tạp như Microservices, Event-Driven Architecture, hay nhiều mô hình khác để xây dựng và quản lý ứng dụng.

---

#### **Cách hoạt động:**

- Sử dụng AWS CDK để triển khai các mô hình thiết kế phức tạp như Microservices Architecture, trong đó các dịch vụ nhỏ độc lập được triển khai và quản lý riêng biệt.
- Áp dụng Event-Driven Architecture để xây dựng các hệ thống phản ứng vào sự kiện, sử dụng các dịch vụ như S3, Lambda, và EventBridge để kích hoạt và xử lý các sự kiện.

---

#### _Ví dụ sử dụng Microservices Architecture:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

// Composite Construct đại diện cho một Microservice
export class MyMicroservice extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    // Tạo Lambda Function
    const myLambda = new lambda.Function(this, "MyLambda", {
      // ... cấu hình khác
    });

    // Tạo API Gateway để kết nối với Lambda
    const api = new apigateway.RestApi(this, "MyApiGateway");
    const integration = new apigateway.LambdaIntegration(myLambda);
    api.root.addMethod("GET", integration);
  }
}
```

Các ví dụ trên giúp tạo ra các Constructs lớn hơn và áp dụng các mô hình thiết kế phức tạp như Microservices Architecture trong AWS CDK.

---
