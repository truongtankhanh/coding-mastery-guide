1. [Integration with Other Services](#integration-with-other-services)
2. [Scalability](#scalability)

---

### Integration with Other Services:

#### **Định nghĩa:**

- Tích hợp nhiều dịch vụ AWS là quá trình kết nối và tương tác giữa các dịch vụ khác nhau của AWS để xây dựng ứng dụng đa dịch vụ và phức tạp.

---

#### **Cách hoạt động:**

- Sử dụng AWS CDK để tạo và kết hợp các dịch vụ như ECS, EKS, API Gateway, Amplify, Lambda, DynamoDB và nhiều dịch vụ khác để xây dựng ứng dụng hoàn chỉnh.
- Kết hợp các dịch vụ này thông qua cấu hình, gọi API, sự kiện hoặc các hình thức tương tác khác để tạo ra quá trình làm việc liên tục giữa chúng.

---

#### _Ví dụ:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

export class MyIntegrationStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo DynamoDB Table
    const myTable = new dynamodb.Table(this, "MyTable", {
      // ... cấu hình khác
    });

    // Tạo Lambda Function
    const myLambda = new lambda.Function(this, "MyLambda", {
      // ... cấu hình khác
    });
    myTable.grantReadWriteData(myLambda);

    // Tạo API Gateway để kết nối với Lambda
    const api = new apigateway.RestApi(this, "MyApiGateway");
    const integration = new apigateway.LambdaIntegration(myLambda);
    api.root.addMethod("GET", integration);
  }
}
```

---

### Scalability:

#### **Định nghĩa:**

- Scalability trong AWS CDK là khả năng thiết kế và triển khai ứng dụng sao cho có thể mở rộng dễ dàng và hiệu quả khi tải trọng tăng.

---

#### **Cách hoạt động:**

- Sử dụng các dịch vụ như ECS, EKS, Lambda, DynamoDB, và Autoscaling Groups để tạo ra một hệ thống có thể tự động mở rộng hoặc co lại theo nhu cầu tải trọng.
- Xác định các cấu hình và policies để tự động thay đổi kích thước và số lượng tài nguyên dựa trên các ngưỡng được thiết lập trước.

---

#### _Ví dụ:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ec2 from "aws-cdk-lib/aws-ec2";

export class MyScalabilityStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo Cluster ECS
    const vpc = new ec2.Vpc(this, "MyVPC", { maxAzs: 2 });
    const cluster = new ecs.Cluster(this, "MyCluster", { vpc });

    // Tạo Service ECS có thể mở rộng
    const service = new ecs.FargateService(this, "MyService", {
      cluster,
      taskDefinition: new ecs.FargateTaskDefinition(this, "MyTaskDef"),
      // ... cấu hình khác
    });
    service.scaleOnCpuUtilization("CpuScaling", {
      targetUtilizationPercent: 50,
    });
  }
}
```

Trong ví dụ trên, chúng ta sử dụng AWS CDK để tạo một service ECS có thể mở rộng dựa trên CPU utilization, cho phép tự động thay đổi kích thước dựa trên mức độ sử dụng CPU.

---
