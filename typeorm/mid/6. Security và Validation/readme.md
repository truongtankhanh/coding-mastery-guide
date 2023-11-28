Tạo ứng dụng an toàn và đảm bảo tính toàn vẹn của dữ liệu là rất quan trọng. Hãy xem xét cách áp dụng Data Validation và SQL Injection Prevention trong NestJS với TypeORM để đảm bảo an toàn và tính toàn vẹn của ứng dụng.

---

1. [Data Validation](#data-validation)
   - [Validate Data](#1-validate-data)
   - [Ví dụ về Data Validation](#2-ví-dụ-về-data-validation)
2. [SQL Injection Prevention và Security Best Practices](#sql-injection-prevention-và-security-best-practices)
   - [SQL Injection Prevention](#1-sql-injection-prevention)
   - [Security Best Practices](#2-security-best-practices)
     - [Prepared Statements](#21-prepared-statements)
     - [Escape và Sanitize Inputs](#22-escape-và-sanitize-inputs)
     - [Tạo Permissions và Policies](#23-tạo-permissions-và-policies)
     - [Sử Dụng Các Thư Viện Bảo Mật Được Kiểm Định](#24-sử-dụng-các-thư-viện-bảo-mật-được-kiểm-định)

---

### Data Validation:

#### **1. Validate Data:**

- Xác thực dữ liệu giúp đảm bảo rằng dữ liệu được gửi đến cơ sở dữ liệu phải tuân thủ các quy tắc xác thực nhất định để tránh dữ liệu không hợp lệ.

#### **2. Ví dụ về Data Validation:**

```typescript
// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, IsNotEmpty } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  // ...
}
```

---

### SQL Injection Prevention và Security Best Practices:

#### **1. SQL Injection Prevention:**

- Nguy cơ SQL Injection có thể xảy ra khi dữ liệu không được xử lý đúng cách, điều này có thể được ngăn chặn bằng cách sử dụng Parameterized Queries hoặc Prepared Statements.

##### _Ví dụ:_

- Để ngăn chặn SQL Injection trong TypeORM, bạn có thể sử dụng parameterized queries hoặc query builders để đảm bảo rằng dữ liệu người dùng được xử lý một cách an toàn. Dưới đây là một ví dụ về việc sử dụng parameterized queries:

```typescript
import { createConnection } from "typeorm";
import { User } from "./entity/User";

// Tạo kết nối với cơ sở dữ liệu
createConnection()
  .then(async (connection) => {
    // Lấy username từ người dùng (có thể là dữ liệu người dùng nhập vào)
    const userInput = "john_doe";

    // Sử dụng parameterized query để truy vấn
    const user = await connection
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.username = :username", { username: userInput }) // Sử dụng parameter
      .getOne();

    console.log("User:", user);
  })
  .catch((error) => console.log(error));
```

---

Trong ví dụ này, `userInput` là dữ liệu được người dùng nhập vào. Thay vì nhúng trực tiếp dữ liệu người dùng vào truy vấn SQL, chúng ta sử dụng `:username` và truyền giá trị của `username` dưới dạng một parameter `{ username: userInput }`. Điều này giúp tránh được lỗ hổng SQL Injection bởi vì TypeORM sẽ xử lý dữ liệu này an toàn và tránh việc nó được thực hiện như một phần của truy vấn SQL.

Đảm bảo rằng dữ liệu người dùng luôn được xử lý thông qua cơ chế parameterized queries hoặc query builders để tránh lỗ hổng bảo mật.

---

#### **2. Security Best Practices:**

- Các best practices bao gồm việc sử dụng Prepared Statements, Escape và Sanitize Inputs, Tạo Permissions và Policies, giới hạn quyền truy cập cơ sở dữ liệu, và sử dụng các thư viện bảo mật được kiểm định.

##### **2.1. Prepared Statements:**

- Sử dụng prepared statements để thực hiện truy vấn cơ sở dữ liệu. TypeORM sử dụng parameterized queries mặc định, giúp tránh được các lỗ hổng SQL injection:

```typescript
import { getRepository } from "typeorm";
import { User } from "./entity/User";

// Sử dụng prepared statement để truy vấn dữ liệu từ cơ sở dữ liệu
const userRepository = getRepository(User);
const users = await userRepository
  .createQueryBuilder("user")
  .where("user.username = :username", { username: "john_doe" })
  .getMany();
console.log("Prepared statement query result:", users);
```

---

##### **2.2. Escape và Sanitize Inputs:**

- Đảm bảo rằng dữ liệu đầu vào từ người dùng đã được escape và sanitize trước khi sử dụng. Điều này giúp ngăn chặn các cuộc tấn công XSS và injection khác:

```typescript
import * as sanitizeHtml from "sanitize-html";

// Sử dụng sanitizeHtml để làm sạch dữ liệu đầu vào từ người dùng
const userInput = '<script>alert("XSS attack")</script>';
const sanitizedInput = sanitizeHtml(userInput);
console.log("Sanitized input:", sanitizedInput);
```

---

##### **2.3. Tạo Permissions và Policies:**

- Xác định và thiết lập các permissions và policies để giới hạn quyền truy cập vào cơ sở dữ liệu.

```typescript
// Ví dụ sử dụng các middleware hoặc decorators trong NestJS để xác thực quyền truy cập
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class DatabaseAccessGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Kiểm tra quyền truy cập và xác thực trong đây
    return true; // Hoặc false tùy thuộc vào logic của bạn
  }
}
```

---

##### **2.4. Sử Dụng Các Thư Viện Bảo Mật Được Kiểm Định:**

-- Sử dụng các thư viện và công cụ bảo mật được kiểm định và cập nhật thường xuyên để bảo vệ ứng dụng của bạn khỏi các lỗ hổng bảo mật:

```typescript
// Sử dụng thư viện mã hóa mạnh như bcrypt để mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
import * as bcrypt from "bcrypt";

const plainTextPassword = "password123";
const hashedPassword = bcrypt.hashSync(plainTextPassword, 10);
console.log("Hashed password:", hashedPassword);
```

Những ví dụ trên giúp thể hiện cách sử dụng những best practices trong việc bảo vệ cơ sở dữ liệu khi làm việc với NestJS và TypeORM.

---
