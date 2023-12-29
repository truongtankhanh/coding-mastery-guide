# Quản lý và triển khai instances EC2:

## Cách tạo và quản lý một instance EC2 từ giao diện điều khiển AWS và thông qua CLI/API.

Tạo và quản lý một instance EC2 có thể được thực hiện thông qua giao diện điều khiển của AWS (AWS Management Console), Command Line Interface (CLI), hoặc API của AWS. Dưới đây là cách bạn có thể trình bày với ví dụ sử dụng JavaScript (hoặc TypeScript) thông qua AWS SDK (boto3 cho Python, aws-sdk cho JavaScript/TypeScript):

### Tạo và quản lý instance EC2 từ giao diện điều khiển AWS:

#### Giao diện điều khiển AWS (AWS Management Console):

- **Bước 1: Đăng nhập vào AWS Management Console:** Truy cập vào console.aws.amazon.com và đăng nhập vào tài khoản AWS của bạn.
- **Bước 2: Chọn EC2 Service:** Trong bảng điều khiển, chọn dịch vụ EC2 để bắt đầu tạo instance.
- **Bước 3: Tạo Instance:** Nhấn vào nút "Launch Instance" để bắt đầu quá trình tạo mới instance.

#### Tạo và quản lý instance EC2 từ CLI/API:

#### Command Line Interface (CLI) - AWS CLI (Command Line Interface):

- Sử dụng các lệnh như `aws ec2 run-instances` để tạo instance mới từ CLI.
- Ví dụ:
  ```bash
  aws ec2 run-instances --image-id ami-12345678 --instance-type t2.micro --key-name MyKeyPair --security-group-ids sg-12345678
  ```

#### AWS SDK - AWS SDK for JavaScript (Node.js):

- Sử dụng AWS SDK for JavaScript để tạo và quản lý instances từ mã JavaScript/TypeScript.
- Ví dụ (Sử dụng TypeScript và AWS SDK for JavaScript):
  ```typescript
  import { EC2 } from "aws-sdk";

  const ec2 = new EC2({ region: "us-west-2" }); // Khởi tạo EC2 client

  const params = {
    ImageId: "ami-12345678",
    InstanceType: "t2.micro",
    KeyName: "MyKeyPair",
    MinCount: 1,
    MaxCount: 1,
  };

  ec2.runInstances(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data.Instances);
    }
  });
  ```

### Tổng kết:

Việc tạo và quản lý instance EC2 có thể thực hiện thông qua giao diện điều khiển AWS bằng cách điều chỉnh các cài đặt thông qua giao diện đồ họa, hoặc thông qua việc sử dụng Command Line Interface (CLI) hoặc AWS SDK để tạo và quản lý instances bằng mã nguồn từ ngôn ngữ JavaScript hoặc TypeScript.

---

## Tối ưu hóa instance EC2 cho hiệu suất tốt nhất: cài đặt instance types, storage, và network configurations.

Tối ưu hóa một instance EC2 đòi hỏi cân nhắc nhiều yếu tố như loại instance, lựa chọn storage và cấu hình mạng. Đây là cách bạn có thể trình bày cùng với ví dụ sử dụng JavaScript hoặc TypeScript thông qua AWS SDK:

### 1. **Lựa chọn Instance Types:**

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { EC2 } from "aws-sdk";

  const ec2 = new EC2({ region: "us-west-2" }); // Khởi tạo EC2 client

  const params = {
    ImageId: "ami-12345678",
    InstanceType: "t3.large", // Chọn loại instance phù hợp (ví dụ: t3.large)
    KeyName: "MyKeyPair",
    MinCount: 1,
    MaxCount: 1,
  };

  ec2.runInstances(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data.Instances);
    }
  });
  ```
  - Trong ví dụ này, instance type được chọn là `t3.large`. Việc lựa chọn loại instance phù hợp phụ thuộc vào nhu cầu cụ thể của ứng dụng (ví dụ: tính toán, bộ nhớ, hiệu suất).

### 2. **Lưu trữ (Storage):**

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { EC2 } from "aws-sdk";

  const ec2 = new EC2({ region: "us-west-2" }); // Khởi tạo EC2 client

  const params = {
    BlockDeviceMappings: [
      {
        DeviceName: "/dev/sda1",
        Ebs: {
          VolumeSize: 100, // Kích thước volume (ví dụ: 100GB)
          VolumeType: "gp2", // Loại volume (ví dụ: gp2 - General Purpose SSD)
          DeleteOnTermination: true,
        },
      },
    ],
    // ... (các thông số khác)
  };

  ec2.runInstances(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data.Instances);
    }
  });
  ```
  - Trong ví dụ này, chúng ta thiết lập một block device với volume size là 100GB và loại volume là General Purpose SSD (`gp2`). Lựa chọn loại và kích thước volume phụ thuộc vào yêu cầu của ứng dụng.

### 3. **Cấu hình Mạng (Network Configurations):**

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { EC2 } from "aws-sdk";

  const ec2 = new EC2({ region: "us-west-2" }); // Khởi tạo EC2 client

  const params = {
    NetworkInterfaces: [
      {
        AssociatePublicIpAddress: true,
        DeviceIndex: 0,
        SubnetId: "subnet-12345678", // ID của subnet
        Groups: ["sg-12345678"], // ID của security group
      },
    ],
    // ... (các thông số khác)
  };

  ec2.runInstances(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data.Instances);
    }
  });
  ```
  - Trong ví dụ này, chúng ta cấu hình một network interface với public IP và kết nối với một subnet cụ thể (`subnet-12345678`) và một security group (`sg-12345678`).

### Tổng kết:

Tối ưu hóa instance EC2 bao gồm việc lựa chọn loại instance phù hợp, cấu hình storage sao cho phù hợp với nhu cầu lưu trữ, và cấu hình mạng để đảm bảo sự linh hoạt và bảo mật. Việc sử dụng AWS SDK với JavaScript/TypeScript giúp bạn tương tác với API của AWS để thực hiện các cài đặt này từ mã nguồn của bạn.

---

## Quản lý và giám sát EC2 instances sử dụng CloudWatch và các công cụ giám sát khác.

Tối ưu hóa và giám sát EC2 instances là một phần quan trọng của việc quản lý hạ tầng đám mây. Đây là cách bạn có thể trình bày cùng với ví dụ sử dụng JavaScript/TypeScript và AWS SDK:

### 1. **Sử dụng CloudWatch để giám sát EC2 instances:**

#### a. Giám sát CPU Utilization:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { CloudWatch } from "aws-sdk";

  const cloudwatch = new CloudWatch({ region: "us-west-2" }); // Khởi tạo CloudWatch client

  const params = {
    MetricName: "CPUUtilization",
    Namespace: "AWS/EC2",
    Dimensions: [
      {
        Name: "InstanceId",
        Value: "i-1234567890abcdef0", // ID của EC2 instance cần giám sát
      },
    ],
    StartTime: new Date("2023-01-01"), // Thời điểm bắt đầu giám sát
    EndTime: new Date("2023-01-02"), // Thời điểm kết thúc giám sát
    Period: 300, // Khoảng thời gian giám sát (tính theo giây)
    Statistics: ["Average"], // Loại thống kê (ví dụ: trung bình)
  };

  cloudwatch.getMetricStatistics(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data.Datapoints);
    }
  });
  ```
  - Trong ví dụ này, chúng ta sử dụng CloudWatch để lấy thông tin về CPU Utilization của một EC2 instance trong một khoảng thời gian cụ thể.

#### b. Tạo cảnh báo (Alarm) dựa trên metric:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  const alarmParams = {
    AlarmName: "HighCPUUtilization", // Tên cảnh báo
    AlarmDescription: "Alarm when CPU exceeds 70%",
    ActionsEnabled: true,
    MetricName: "CPUUtilization",
    Namespace: "AWS/EC2",
    Statistic: "Average",
    Threshold: 70,
    ComparisonOperator: "GreaterThanThreshold",
    Period: 300,
    EvaluationPeriods: 1,
    Dimensions: [
      {
        Name: "InstanceId",
        Value: "i-1234567890abcdef0", // ID của EC2 instance cần giám sát
      },
    ],
    AlarmActions: ["arn:aws:sns:us-west-2:111122223333:MyTopic"], // ARN của SNS topic để gửi thông báo
  };

  cloudwatch.putMetricAlarm(alarmParams, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data);
    }
  });
  ```
  - Trong ví dụ này, chúng ta tạo một cảnh báo dựa trên metric CPU Utilization để thông báo khi CPU vượt quá mức 70%.

### 2. **Sử dụng các công cụ giám sát khác:**

Ngoài CloudWatch, có các công cụ giám sát bên thứ ba như New Relic, Datadog, Prometheus, Grafana, mà bạn có thể tích hợp để thu thập và hiển thị dữ liệu giám sát từ EC2 instances một cách chi tiết và linh hoạt hơn.

### Tổng kết:

Sử dụng CloudWatch, bạn có thể giám sát và tạo cảnh báo dựa trên các metrics như CPU Utilization, Memory Utilization, Network I/O, và Disk I/O để hiểu và quản lý hiệu suất của EC2 instances. Bên cạnh đó, việc tích hợp với các công cụ giám sát bên thứ ba cũng cung cấp khả năng phân tích và quản lý mở rộng đáng kể cho việc quản lý EC2.

---

## Cách thực hiện rolling updates hoặc blue-green deployments với EC2 instances.

Việc thực hiện rolling updates hoặc blue-green deployments với EC2 instances là một phần quan trọng trong quản lý hạ tầng và triển khai ứng dụng trên AWS. Dưới đây là cách bạn có thể trình bày cùng với ví dụ sử dụng JavaScript/TypeScript và AWS SDK:

### Rolling Updates với EC2 instances:

#### a. Cách thực hiện Rolling Updates:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { AutoScaling } from "aws-sdk";

  const autoscaling = new AutoScaling({ region: "us-west-2" }); // Khởi tạo Auto Scaling client

  const params = {
    AutoScalingGroupName: "my-auto-scaling-group", // Tên của Auto Scaling Group
    MaxSize: 4, // Số lượng instances tối đa
    MinSize: 2, // Số lượng instances tối thiểu
    DesiredCapacity: 3, // Số lượng instances mong muốn
  };

  autoscaling.updateAutoScalingGroup(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data);
    }
  });
  ```
  - Trong ví dụ này, chúng ta sử dụng AWS SDK để cập nhật Auto Scaling Group để thực hiện rolling updates. Điều này có thể thay đổi DesiredCapacity để tăng hoặc giảm số lượng instances trong group một cách an toàn.

### Blue-Green Deployments với EC2 instances:

#### b. Cách thực hiện Blue-Green Deployments:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { ElasticLoadBalancing } from "aws-sdk";

  const elb = new ElasticLoadBalancing({ region: "us-west-2" }); // Khởi tạo ELB client

  const params = {
    LoadBalancerName: "my-load-balancer", // Tên của Elastic Load Balancer (ELB)
    Instances: [
      {
        InstanceId: "i-1234567890abcdef0", // ID của instance mới (blue)
      },
      // Thêm instance mới (green) vào ELB
    ],
  };

  elb.registerInstancesWithLoadBalancer(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data);
    }
  });
  ```
  - Trong ví dụ này, chúng ta sử dụng AWS SDK để thêm một instance mới (green) vào Elastic Load Balancer (ELB) và sau đó gỡ bỏ instance cũ (blue) sau khi deployment thành công.

### Tổng kết:

Việc thực hiện rolling updates và blue-green deployments với EC2 instances có thể được thực hiện thông qua AWS SDK. Rolling updates thường được thực hiện thông qua Auto Scaling Group để điều chỉnh số lượng instances một cách an toàn. Trong khi đó, blue-green deployments thường liên quan đến việc thêm/xóa instances từ Elastic Load Balancer để triển khai phiên bản mới của ứng dụng một cách dễ dàng và an toàn hơn.

---

# Bảo mật và tự động hóa trong EC2:

## Các phương pháp để bảo vệ EC2 instances khỏi các mối đe dọa bảo mật.

Việc bảo vệ EC2 instances khỏi các mối đe dọa bảo mật là một phần quan trọng của việc quản lý hệ thống trên AWS. Dưới đây là cách bạn có thể trình bày cùng với ví dụ sử dụng JavaScript/TypeScript và AWS SDK:

### 1. Bảo vệ EC2 Instances:

#### a. Sử dụng Security Groups:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { EC2 } from "aws-sdk";

  const ec2 = new EC2({ region: "us-west-2" }); // Khởi tạo EC2 client

  const params = {
    GroupName: "my-security-group",
    Description: "My security group description",
    VpcId: "vpc-12345678", // ID của VPC
  };

  ec2.createSecurityGroup(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data);
    }
  });
  ```
  - Trong ví dụ này, chúng ta sử dụng AWS SDK để tạo một Security Group để điều chỉnh traffic đến EC2 instances.

#### b. Sử dụng IAM Roles:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { IAM } from "aws-sdk";

  const iam = new IAM({ region: "us-west-2" }); // Khởi tạo IAM client

  const params = {
    RoleName: "my-ec2-role",
    AssumeRolePolicyDocument: JSON.stringify({
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Principal: { Service: "ec2.amazonaws.com" },
          Action: "sts:AssumeRole",
        },
      ],
    }),
  };

  iam.createRole(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data);
    }
  });
  ```
  - Trong ví dụ này, chúng ta sử dụng AWS SDK để tạo một IAM Role cho EC2 instances, cho phép chúng thực hiện các hành động được chỉ định.

### 2. Quản lý Quyền Truy Cập:

#### a. Sử dụng Key Pairs để truy cập SSH:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { EC2 } from "aws-sdk";

  const ec2 = new EC2({ region: "us-west-2" }); // Khởi tạo EC2 client

  const params = {
    KeyName: "my-key-pair",
  };

  ec2.createKeyPair(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data.KeyMaterial);
    }
  });
  ```
  - Trong ví dụ này, chúng ta sử dụng AWS SDK để tạo một Key Pair để sử dụng khi kết nối SSH đến EC2 instances.

### Tổng kết:

Bảo vệ EC2 instances có thể được thực hiện bằng cách sử dụng Security Groups để điều chỉnh traffic, IAM Roles để quản lý quyền truy cập, và Key Pairs để xác thực SSH. Việc sử dụng AWS SDK với JavaScript/TypeScript giúp quản lý các cài đặt bảo mật từ mã nguồn của bạn một cách linh hoạt và an toàn.

---

## Sử dụng AWS Systems Manager hoặc AWS Lambda để tự động hóa việc quản lý EC2 instances.

Việc sử dụng AWS Systems Manager hoặc AWS Lambda để tự động hóa việc quản lý EC2 instances là một phần quan trọng của việc triển khai, giám sát và quản lý hạ tầng trên AWS. Dưới đây là cách bạn có thể trình bày cùng với ví dụ sử dụng JavaScript/TypeScript và AWS SDK:

### Sử dụng AWS Systems Manager:

#### a. Sử dụng Systems Manager để tự động triển khai cập nhật cho EC2 instances:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { SSM } from "aws-sdk";

  const ssm = new SSM({ region: "us-west-2" }); // Khởi tạo Systems Manager client

  const params = {
    InstanceIds: ["i-1234567890abcdef0", "i-0987654321fedcba0"], // Danh sách ID của EC2 instances
    DocumentName: "AWS-RunShellScript", // Tên của tài liệu (document) cần thực hiện
    Parameters: {
      commands: ["apt-get update", "apt-get upgrade -y"], // Các lệnh cần thực hiện
    },
  };

  ssm.sendCommand(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Command Sent", data);
    }
  });
  ```
  - Trong ví dụ này, chúng ta sử dụng AWS SDK để gửi một lệnh cập nhật cho EC2 instances thông qua AWS Systems Manager.

### Sử dụng AWS Lambda:

#### b. Sử dụng Lambda để quản lý vòng đời của EC2 instances:

- **Ví dụ sử dụng AWS SDK for JavaScript/TypeScript:**
  ```typescript
  import { Lambda } from "aws-sdk";

  const lambda = new Lambda({ region: "us-west-2" }); // Khởi tạo Lambda client

  const params = {
    FunctionName: "myEC2ManagementFunction", // Tên của Lambda function
    Payload: JSON.stringify({
      action: "stop", // Hành động cần thực hiện (ví dụ: stop instance)
      instanceIds: ["i-1234567890abcdef0"], // ID của EC2 instances
    }),
  };

  lambda.invoke(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Function Invoked", data);
    }
  });
  ```
  - Trong ví dụ này, chúng ta sử dụng AWS SDK để gọi một Lambda function để thực hiện hành động quản lý trên EC2 instances, ví dụ như dừng instances.

### Tổng kết:

Sử dụng AWS Systems Manager cho phép bạn thực hiện các tác vụ quản lý EC2 instances từ xa, trong khi sử dụng AWS Lambda cho phép bạn thực hiện các hành động tự động hoá dựa trên các sự kiện hoặc lịch trình. Sử dụng AWS SDK với JavaScript/TypeScript giúp bạn tự động hóa việc quản lý EC2 instances một cách linh hoạt và hiệu quả.

---
