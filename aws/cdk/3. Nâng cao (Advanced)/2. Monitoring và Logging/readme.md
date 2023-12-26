Quản lý CloudWatch Metrics và Logs cùng với việc sử dụng Application Insights trong AWS CDK:

---
1. [CloudWatch Metrics và Logs](#cloudwatch-metrics-và-logs)
2. [Application Insights](#application-insights)
---

### CloudWatch Metrics và Logs:

#### **Định nghĩa:**

- **CloudWatch Metrics:** Là các số liệu thống kê được ghi lại theo thời gian về các tài nguyên AWS, giúp theo dõi và phân tích hiệu suất của chúng.
- **CloudWatch Logs:** Là nơi lưu trữ logs (nhật ký) từ các tài nguyên AWS, giúp theo dõi và phân tích thông tin từ các ứng dụng, hệ thống, hoặc dịch vụ.

---

#### **Cách hoạt động:**

- Sử dụng AWS CDK để tạo và quản lý các CloudWatch Metrics và Logs cho các tài nguyên như Lambda functions, API Gateway, EC2 instances, và nhiều dịch vụ khác.
- Tạo các metric filters để lọc và phân tích logs, xác định các metric theo các thông số quan trọng.

---

#### *Ví dụ:*

```typescript
import * as cdk from "aws-cdk-lib";
import * as logs from "aws-cdk-lib/aws-logs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class MyCloudWatchStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo một Lambda Function
    const myLambda = new lambda.Function(this, "MyLambda", {
      // ... cấu hình khác
    });

    // Tạo Log Group và gắn với Lambda Function
    const logGroup = new logs.LogGroup(this, "MyLogGroup", {
      retention: logs.RetentionDays.ONE_WEEK,
    });
    myLambda.addLogGroupPermission("LogGroupPermission", logGroup);
  }
}
```

---

### Application Insights:

#### **Định nghĩa:**

- Application Insights là quá trình theo dõi và phân tích hiệu suất của ứng dụng, thường sử dụng các công cụ như AWS X-Ray để xác định vấn đề và cải thiện hiệu suất ứng dụng.

---

#### **Cách hoạt động:**

- Sử dụng các dịch vụ như AWS X-Ray để theo dõi, phân tích và giám sát hoạt động của ứng dụng.
- Sử dụng AWS CDK để tích hợp và cấu hình X-Ray và các công cụ khác để theo dõi hoạt động của ứng dụng.

---

#### *Ví dụ sử dụng AWS X-Ray trong CDK:*

```typescript
import * as cdk from "aws-cdk-lib";
import * as xray from "aws-cdk-lib/aws-xray";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class MyApplicationInsightsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo một Lambda Function
    const myLambda = new lambda.Function(this, "MyLambda", {
      // ... cấu hình khác
    });

    // Enable X-Ray cho Lambda Function
    const myLambdaVersion = myLambda.addVersion("1.0.0");
    myLambdaVersion.addAlias("prod");
    const xrayEnabledFunction = new xray.CfnSamplingRule(
      this,
      "XRayEnabledFunction",
      {
        samplingRule: {
          // ... Cấu hình xác định quy tắc sampling
        },
        serviceName: "MyLambda/prod",
        // ... Cấu hình khác
      }
    );
  }
}
```

Đoạn mã trên cho thấy cách sử dụng AWS CDK để kích hoạt và cấu hình AWS X-Ray cho Lambda Function, để theo dõi và phân tích hiệu suất của ứng dụng.

---
