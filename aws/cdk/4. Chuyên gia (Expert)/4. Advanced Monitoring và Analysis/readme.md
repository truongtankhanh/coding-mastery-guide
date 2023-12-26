Hai thành phần này liên quan đến việc theo dõi hiệu suất và phân tích logs trong AWS CDK:

---

1. [CloudWatch và Application Insights](#cloudwatch-và-application-insights)
2. [Log Analysis và Troubleshooting](#log-analysis-và-troubleshooting)

---

### CloudWatch và Application Insights:

#### **Định nghĩa:**

- Sử dụng CloudWatch và Application Insights trong AWS CDK để theo dõi và phân tích hiệu suất ứng dụng một cách chi tiết, từ lượng logs, metrics đến xác định và giải quyết vấn đề hiệu suất.

---

#### **Cách hoạt động:**

- Sử dụng AWS CDK để tạo và cấu hình CloudWatch Log Groups, Metrics, và Alarms để theo dõi hiệu suất của các tài nguyên triển khai.
- Sử dụng X-Ray để theo dõi và phân tích các hoạt động, dịch vụ, và các phần của ứng dụng để xác định và giải quyết vấn đề hiệu suất.

---

#### _Ví dụ:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import * as xray from "aws-cdk-lib/aws-xray";

export class MyPerformanceMonitoringStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo Lambda Function
    const myLambda = new lambda.Function(this, "MyLambda", {
      // ... cấu hình khác
    });

    // Kích hoạt X-Ray cho Lambda Function
    const myLambdaVersion = myLambda.addVersion("MyLambdaVersion");
    xray.CfnSamplingRule(this, "MyLambdaXRaySampling", {
      serviceName: myLambda.functionArn,
      // ... cấu hình mẫu lấy mẫu
    });

    // Tạo CloudWatch Metrics và Alarms cho Lambda
    const errorMetric = new cloudwatch.Metric({
      namespace: "AWS/Lambda",
      metricName: "Errors",
      dimensions: {
        FunctionName: myLambda.functionName,
      },
      statistic: "Sum",
    });
    new cloudwatch.Alarm(this, "MyLambdaErrorAlarm", {
      metric: errorMetric,
      threshold: 1,
      evaluationPeriods: 1,
      comparisonOperator:
        cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      // ... cấu hình khác
    });
  }
}
```

---

### Log Analysis và Troubleshooting:

#### **Định nghĩa:**

- Log Analysis và Troubleshooting trong AWS CDK là việc áp dụng kỹ năng phân tích log để phát hiện và khắc phục sự cố một cách hiệu quả thông qua việc phân tích logs được tạo ra bởi các dịch vụ AWS.

---

#### **Cách hoạt động:**

- Sử dụng AWS CDK để tạo và cấu hình CloudWatch Log Groups và Filters để thu thập và tìm kiếm logs.
- Sử dụng các công cụ và dịch vụ của AWS như CloudWatch Logs Insights để phân tích logs và tìm kiếm thông tin cần thiết để khắc phục sự cố.

---

#### _Ví dụ:_

```typescript
import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as logs from "aws-cdk-lib/aws-logs";

export class MyLogAnalysisStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Tạo Lambda Function
    const myLambda = new lambda.Function(this, "MyLambda", {
      // ... cấu hình khác
    });

    // Tạo CloudWatch Log Group cho Lambda
    const logGroup = new logs.LogGroup(this, "MyLambdaLogGroup", {
      logGroupName: `/aws/lambda/${myLambda.functionName}`,
      retention: logs.RetentionDays.ONE_WEEK,
    });

    // Tạo Filter cho Log Group để tìm kiếm thông tin cần thiết
    logGroup.addSubscriptionFilter("MyLambdaErrorFilter", {
      destination: new logs.Destination.Lambda(/* ... */),
      filterPattern: logs.FilterPattern.allTerms("ERROR", "Exception"),
    });
  }
}
```

Trong ví dụ trên, chúng ta tạo một CloudWatch Log Group và tạo một filter để lọc logs của Lambda Function để tìm kiếm thông tin liên quan đến lỗi hoặc ngoại lệ.

---
