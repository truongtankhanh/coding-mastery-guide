## Auto Scaling Groups (ASG): Làm thế nào để cấu hình một Auto Scaling Group và xác định các yếu tố quyết định khi cần mở rộng hoặc thu nhỏ group?

Cấu hình một Auto Scaling Group (ASG) trên Amazon EC2 bao gồm các bước cơ bản để xác định các yếu tố quyết định khi cần mở rộng hoặc thu nhỏ group:

### 1. Định nghĩa Launch Configuration:

- **Tạo Launch Configuration:** Xác định cấu hình khởi chạy cho instances mới. Bao gồm AMI, loại instance, thông tin về key pair, security group, userdata,...

Ví dụ:

```typescript
import * as AWS from "aws-sdk";

const autoscaling = new AWS.AutoScaling({ region: "us-west-2" });

const launchConfigParams: AWS.AutoScaling.CreateLaunchConfigurationType = {
  LaunchConfigurationName: "my-launch-config",
  ImageId: "ami-12345678", // AMI ID
  InstanceType: "t2.micro", // Loại instance
  // Các cài đặt khác...
};

autoscaling.createLaunchConfiguration(launchConfigParams, (err, data) => {
  if (err) console.error("Không thể tạo Launch Configuration", err);
  else console.log("Launch Configuration đã được tạo", data);
});
```

### 2. Tạo Auto Scaling Group:

- **Thiết lập Auto Scaling Group:** Xác định các thông số nhóm ASG bao gồm tên, số lượng instances tối thiểu/tối đa/mong muốn, và thông tin về Load Balancer nếu có.

Ví dụ:

```typescript
const asgParams: AWS.AutoScaling.Types.CreateAutoScalingGroupType = {
  AutoScalingGroupName: "my-auto-scaling-group",
  LaunchConfigurationName: "my-launch-config", // Tên Launch Configuration đã tạo
  MinSize: 1,
  MaxSize: 10,
  DesiredCapacity: 5,
  // Các cài đặt khác...
};

autoscaling.createAutoScalingGroup(asgParams, (err, data) => {
  if (err) console.error("Không thể tạo Auto Scaling Group", err);
  else console.log("Auto Scaling Group đã được tạo", data);
});
```

### 3. Xác định Scaling Policies:

- **Thiết lập Scaling Policies:** Xác định các chính sách mở rộng (scale out) và thu hẹp (scale in) dựa trên các metric như CPU, network traffic, hoặc số lượng yêu cầu.

Ví dụ:

```typescript
const scalingPolicyParams: AWS.AutoScaling.PutScalingPolicyType = {
  AutoScalingGroupName: "my-auto-scaling-group",
  PolicyName: "my-scaling-policy",
  AdjustmentType: "ChangeInCapacity",
  ScalingAdjustment: 1, // Số lượng instances sẽ thêm khi scaling out
  // Các cài đặt khác...
};

autoscaling.putScalingPolicy(scalingPolicyParams, (err, data) => {
  if (err) console.error("Không thể thiết lập Scaling Policy", err);
  else console.log("Scaling Policy đã được thiết lập", data);
});
```

Khi trả lời câu hỏi, tập trung vào việc giải thích quy trình từ việc định nghĩa Launch Configuration, thiết lập Auto Scaling Group và xác định Scaling Policies để quản lý tải công việc trên hệ thống EC2 của bạn. Đưa ra ví dụ cụ thể với mã code để minh họa các bước này.

---

## Elastic Load Balancers (ELB): Cách ELB phân phối tải đều giữa các instances và giảm thiểu tải cho mỗi instance?

Elastic Load Balancers (ELB) trên Amazon EC2 có khả năng phân phối tải đều giữa các instances và giảm thiểu tải cho mỗi instance thông qua các kỹ thuật sau:

### 1. Round Robin và Load Balancing Algorithm:

- **Phân phối tải theo Round Robin:** ELB sử dụng thuật toán Round Robin để chia đều tải công việc cho các instances trong nhóm.
- **Session-based Load Balancing:** ELB có khả năng cân nhắc các yêu cầu của cùng một phiên làm việc để đảm bảo chúng được gửi đến cùng một instance.

### 2. Health Checks và Auto Scaling Integration:

- **Kiểm tra sức khỏe của instances:** ELB thực hiện kiểm tra định kỳ để xác định xem instance có hoạt động đúng cách hay không. Các instance không hoạt động sẽ không nhận được tải.
- **Tích hợp với Auto Scaling:** ELB tích hợp với Auto Scaling để tự động thêm hoặc loại bỏ instances dựa trên sức khỏe và tải công việc.

Ví dụ TypeScript:

```typescript
import * as AWS from "aws-sdk";

// Khởi tạo ELB service
const elbv2 = new AWS.ELBv2({ region: "us-west-2" });

// Tạo Target Group
const targetGroupParams: AWS.ELBv2.CreateTargetGroupInput = {
  Name: "my-target-group",
  Protocol: "HTTP",
  Port: 80,
  // Các cài đặt khác...
};

elbv2.createTargetGroup(targetGroupParams, (err, data) => {
  if (err) console.error("Không thể tạo Target Group", err);
  else console.log("Target Group đã được tạo", data);
});
```

Khi trả lời câu hỏi này, tập trung vào việc giải thích cách ELB sử dụng các thuật toán phân phối tải để chia đều tải công việc và giảm thiểu tải cho mỗi instance trong nhóm. Đưa ra ví dụ cụ thể về cách sử dụng ELB trong mã code để minh họa các bước này.

---

## Làm thế nào ASG và ELB hoạt động cùng nhau để đáp ứng yêu cầu tải?

Auto Scaling Groups (ASG) và Elastic Load Balancers (ELB) là hai dịch vụ quan trọng trên Amazon EC2 giúp quản lý và phân phối tải công việc một cách linh hoạt và hiệu quả. Khi được sử dụng cùng nhau, chúng có thể tạo ra một mô hình đáp ứng tải mạnh mẽ. Dưới đây là cách chúng hoạt động cùng nhau:

### 1. Auto Scaling Groups (ASG):

- **Định nghĩa và Quản lý Instances:** ASG quản lý số lượng instances EC2 dựa trên các cài đặt được xác định trước nhưng vẫn đáp ứng theo nhu cầu tải.
- **Tự động mở rộng và thu hẹp:** ASG tự động thêm instances khi tải công việc tăng và giảm instances khi tải giảm, dựa trên các ngưỡng hoặc các metric xác định trước.

### 2. Elastic Load Balancers (ELB):

- **Phân phối Tải Công Việc:** ELB phân phối tải công việc đồng đều giữa các instances trong một Auto Scaling Group. Nó cung cấp load balancing và giúp tránh quá tải cho một instance cụ thể.
- **Health Checks và Session Persistence:** ELB kiểm tra sức khỏe của instances và chỉ định các yêu cầu của cùng một phiên làm việc tới cùng một instance để duy trì trạng thái phiên.

### Khi Hoạt Động Cùng Nhau:

- ASG tự động thêm hoặc loại bỏ instances dựa trên tải công việc và sức khỏe của instances.
- ELB phân phối tải công việc đến các instances trong ASG, đảm bảo rằng mỗi instance chỉ nhận được tải phù hợp và giúp duy trì sức khỏe của hệ thống.

Ví dụ TypeScript:

```typescript
// Khởi tạo ELB và ASG service
const elbv2 = new AWS.ELBv2({ region: "us-west-2" });
const autoscaling = new AWS.AutoScaling({ region: "us-west-2" });

// Thiết lập Target Group và Load Balancer
const targetGroupParams: AWS.ELBv2.CreateTargetGroupInput = {
  // Cài đặt Target Group...
};
elbv2.createTargetGroup(targetGroupParams, (err, targetGroupData) => {
  // Xác định Load Balancer và kết nối với Target Group...
});

// Thiết lập Auto Scaling Group
const asgParams: AWS.AutoScaling.Types.CreateAutoScalingGroupType = {
  // Cấu hình Auto Scaling Group...
};
autoscaling.createAutoScalingGroup(asgParams, (err, asgData) => {
  // Kết nối Auto Scaling Group với Target Group của ELB...
});
```

Khi trả lời câu hỏi này, tập trung vào việc giải thích cách ASG và ELB hoạt động cùng nhau để tạo ra một hệ thống có khả năng đáp ứng tải tốt hơn. Đưa ra ví dụ về cách cấu hình và kết nối ASG và ELB trong mã code để minh họa quá trình này.

---

## Chiến lược để xử lý các vấn đề như sticky sessions hoặc routing dựa trên yêu cầu khi sử dụng ELB?

Khi sử dụng Elastic Load Balancer (ELB) trên Amazon EC2 và cần xử lý các vấn đề như sticky sessions hoặc routing dựa trên yêu cầu, có một số chiến lược và cấu hình cụ thể có thể được áp dụng:

### 1. Sticky Sessions:

- **Session-based Load Balancing:** Đảm bảo các yêu cầu từ cùng một phiên làm việc được gửi đến cùng một instance.

#### Cấu hình Sticky Sessions trên ELB:

```typescript
const elbv2 = new AWS.ELBv2({ region: "us-west-2" });

const stickySessionsParams: AWS.ELBv2.ModifyTargetGroupAttributesInput = {
  TargetGroupArn:
    "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-target-group/123456789012",
  Attributes: [
    {
      Key: "stickiness.enabled",
      Value: "true",
    },
    {
      Key: "stickiness.type",
      Value: "lb_cookie",
    },
  ],
};

elbv2.modifyTargetGroupAttributes(stickySessionsParams, (err, data) => {
  if (err) console.error("Không thể cấu hình Sticky Sessions", err);
  else console.log("Sticky Sessions đã được cấu hình", data);
});
```

### 2. Routing Dựa Trên Yêu Cầu:

- **Routing yêu cầu đến các tập đích khác nhau dựa trên thông tin trong yêu cầu.**

#### Cấu hình Routing Rules trên ELB:

```typescript
const routingParams: AWS.ELBv2.CreateRuleInput = {
  Actions: [
    {
      TargetGroupArn:
        "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-target-group/123456789012",
      Type: "forward",
    },
  ],
  Conditions: [
    {
      Field: "host-header",
      Values: ["example1.com"],
    },
  ],
  ListenerArn:
    "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/my-listener/123456789012",
  Priority: 1,
};

elbv2.createRule(routingParams, (err, data) => {
  if (err) console.error("Không thể cấu hình Routing", err);
  else console.log("Routing đã được cấu hình", data);
});
```

### Lưu ý:

- **Sticky Sessions:** Hỗ trợ duy trì phiên làm việc cho ứng dụng yêu cầu việc duy trì trạng thái phiên giữa các yêu cầu.
- **Routing Dựa Trên Yêu Cầu:** Cho phép định tuyến yêu cầu tới các tập đích khác nhau dựa trên thông tin trong yêu cầu, như header, path, hoặc host.

Khi trả lời câu hỏi này, tập trung vào việc giải thích cách cấu hình ELB để xử lý sticky sessions hoặc routing dựa trên yêu cầu. Đưa ra ví dụ cụ thể về cấu hình bằng mã code để minh họa chi tiết các bước này.

---
