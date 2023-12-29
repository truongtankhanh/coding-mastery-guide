## IAM roles là gì và làm thế nào chúng được sử dụng trong môi trường EC2?

IAM (Identity and Access Management) roles trong môi trường EC2 là cơ chế quản lý quyền truy cập cho các service và resources trong AWS. Chúng cho phép EC2 instances hoặc service khác trong AWS lấy các thông tin xác thực mà không cần sử dụng credentials tĩnh như access key hay secret key.

### Cách Sử Dụng IAM Roles Trên EC2:

1. **Gán IAM Role Cho EC2 Instance:**

   - Khi tạo hoặc cấu hình một EC2 instance, bạn có thể gán một IAM role cho instance đó thông qua Console hoặc API.
   - Role này chứa các permissions được định nghĩa trước, cho phép instance thực hiện các hành động cụ thể trên AWS.

2. **Không Cần Sử Dụng Access Key và Secret Key:**

   - EC2 instance được gán IAM role có thể tự động lấy các thông tin xác thực từ role mà không cần sử dụng access key hay secret key.
   - Điều này giúp tránh việc lưu trữ credentials trực tiếp trên instance và tăng cường bảo mật.

3. **Quản Lý Quyền Truy Cập:**
   - IAM roles cho phép quản lý quyền truy cập của EC2 instance đến các dịch vụ AWS như S3, DynamoDB, và các service khác.
   - Bạn có thể định nghĩa các policies để quản lý chính xác quyền truy cập cho từng role.

### Ví Dụ Cụ Thể:

```typescript
import { EC2 } from "aws-sdk";

const ec2 = new EC2({ region: "us-east-1" });

const params: EC2.RunInstancesRequest = {
  ImageId: "ami-12345678",
  InstanceType: "t2.micro",
  MaxCount: 1,
  MinCount: 1,
  IamInstanceProfile: {
    Arn: "arn:aws:iam::123456789012:instance-profile/MyEC2Role", // ARN của IAM Role
  },
};

ec2.runInstances(params, (err, data) => {
  if (err) console.error("Không thể tạo EC2 instance", err);
  else console.log("EC2 instance đã được tạo", data);
});
```

### Lưu Ý:

- IAM roles giúp cung cấp quyền truy cập một cách linh hoạt và an toàn cho EC2 instances trong AWS.
- Việc sử dụng IAM roles giúp quản lý quyền truy cập một cách an toàn hơn và loại bỏ việc quản lý credentials trực tiếp trên instance.

Khi trả lời câu hỏi này, tập trung vào việc diễn đạt về vai trò và cách sử dụng IAM roles trên EC2 instances, bao gồm cách gán roles, cách roles giúp quản lý quyền truy cập và cách chúng cung cấp an ninh và linh hoạt cho việc quản lý permissions trong môi trường EC2. Áp dụng ví dụ cụ thể với mã code nếu cần thiết.

---

## Sự khác biệt giữa IAM roles và IAM users/groups trong việc quản lý quyền truy cập EC2.

IAM Roles, IAM Users, và IAM Groups đều có vai trò quan trọng trong việc quản lý quyền truy cập trong môi trường EC2, nhưng chúng có những đặc điểm và ứng dụng khác nhau:

### IAM Roles:

1. **Phục Vụ Cho Service hoặc Resource:**

   - IAM Roles thường được sử dụng để cung cấp quyền truy cập cho EC2 instances, Lambda functions, hoặc các AWS services khác.
   - Cung cấp quyền truy cập tạm thời để service có thể thực hiện các hành động nhất định trong AWS mà không cần sử dụng credentials.

2. **Thường Được Gán Cho Resource Cụ Thể:**
   - IAM Roles được gán trực tiếp cho các resource cụ thể như EC2 instance thông qua Instance Profile.

### IAM Users và Groups:

1. **Dành Cho Người Dùng và Tổ Chức:**

   - IAM Users là các tài khoản người dùng cá nhân trong AWS, trong khi IAM Groups là nhóm các user.
   - IAM Groups cho phép tổ chức và quản lý quyền truy cập cho một nhóm người dùng.

2. **Được Sử Dụng Cho Đa Dạng Mục Đích:**
   - IAM Users và Groups thường được sử dụng để quản lý quyền truy cập cho các cá nhân hoặc các nhóm người dùng đối với nhiều dịch vụ AWS, không chỉ riêng EC2.

### Ví Dụ Cụ Thể:

```typescript
// Tạo IAM Role
import { IAM } from "aws-sdk";

const iam = new IAM({ region: "us-east-1" });

const params: IAM.CreateRoleRequest = {
  RoleName: "MyEC2Role",
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
  if (err) console.error("Không thể tạo IAM Role", err);
  else console.log("IAM Role đã được tạo", data);
});

// Tạo IAM User
const paramsUser: IAM.CreateUserRequest = {
  UserName: "MyUser",
};

iam.createUser(paramsUser, (err, data) => {
  if (err) console.error("Không thể tạo IAM User", err);
  else console.log("IAM User đã được tạo", data);
});

// Tạo IAM Group
const paramsGroup: IAM.CreateGroupRequest = {
  GroupName: "MyGroup",
};

iam.createGroup(paramsGroup, (err, data) => {
  if (err) console.error("Không thể tạo IAM Group", err);
  else console.log("IAM Group đã được tạo", data);
});
```

### Lưu Ý:

- IAM Roles thường được sử dụng cho service và resource cụ thể như EC2 instances để cung cấp quyền truy cập tạm thời.
- IAM Users và Groups thì dành cho người dùng và tổ chức, có thể được sử dụng để quản lý quyền truy cập cho nhiều dịch vụ trong AWS, không chỉ riêng EC2.

Khi trả lời câu hỏi này, tập trung vào việc diễn đạt về sự khác biệt giữa IAM Roles, IAM Users và Groups trong việc quản lý quyền truy cập EC2, bao gồm cách chúng được sử dụng và ứng dụng trong môi trường AWS. Áp dụng ví dụ cụ thể với mã code nếu cần thiết.

---

## Làm thế nào để gắn (attach) một IAM role vào một instance EC2 và cách nó ảnh hưởng đến quyền truy cập của instance đó đến các dịch vụ AWS khác?

Để gắn (attach) một IAM role vào một instance EC2, bạn cần thực hiện các bước sau:

### Gắn IAM Role vào Instance EC2:

1. **Tạo IAM Role:**

   - Đầu tiên, bạn cần tạo một IAM Role trong AWS IAM Console hoặc sử dụng API/CLI để tạo role với các permissions cần thiết.

2. **Gắn IAM Role vào Instance:**
   - Khi tạo hoặc cấu hình một EC2 instance, bạn có thể gắn (attach) IAM Role vào instance đó thông qua Console hoặc API/CLI.
   - Role sẽ được chọn từ danh sách các roles có sẵn trong tài khoản AWS của bạn.

### Ảnh Hưởng Đến Quyền Truy Cập Của Instance:

- Khi một IAM role được gắn vào một EC2 instance, instance đó sẽ có quyền truy cập tới các dịch vụ AWS mà role đó được cấu hình cho phép.
- Instance sẽ có thể sử dụng các AWS SDK hoặc AWS Command Line Interface (CLI) để truy cập các dịch vụ mà role cho phép.

### Ví Dụ Cụ Thể (Sử dụng AWS SDK):

```typescript
import { EC2 } from "aws-sdk";

const ec2 = new EC2({ region: "us-east-1" });

const params: EC2.RunInstancesRequest = {
  ImageId: "ami-12345678",
  InstanceType: "t2.micro",
  MaxCount: 1,
  MinCount: 1,
  IamInstanceProfile: {
    Arn: "arn:aws:iam::123456789012:instance-profile/MyEC2Role", // ARN của IAM Role
  },
};

ec2.runInstances(params, (err, data) => {
  if (err) console.error("Không thể tạo EC2 instance", err);
  else console.log("EC2 instance đã được tạo", data);
});
```

### Lưu Ý:

- Khi một IAM role được gắn vào một EC2 instance, instance sẽ thừa hưởng các quyền truy cập từ role đó.
- Điều này giúp instance thực hiện các hành động trong AWS mà không cần sử dụng access keys hoặc secret keys mà thay vào đó sử dụng các temporary credentials từ role.

Khi trả lời câu hỏi này, tập trung vào việc diễn đạt về cách gắn IAM role vào EC2 instance và cách mà việc này ảnh hưởng đến quyền truy cập của instance tới các dịch vụ AWS khác. Áp dụng ví dụ cụ thể với mã code nếu cần thiết.

---
