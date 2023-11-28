Để minh họa phần cấu hình và kết nối cơ sở dữ liệu với TypeORM sử dụng NestJS, chúng ta sẽ tạo một NestJS project và thực hiện cài đặt TypeORM để kết nối với cơ sở dữ liệu MySQL.

---

1. [Tạo NestJS Project](#bước-1-tạo-nestjs-project)
2. [Cài đặt TypeORM và MySQL Driver](#bước-2-cài-đặt-typeorm-và-mysql-driver)
3. [Cấu hình TypeORM](#bước-3-cấu-hình-typeorm)
4. [Kết nối với Cơ sở Dữ liệu trong AppModule](#bước-4-kết-nối-với-cơ-sở-dữ-liệu-trong-appmodule)
5. [Tạo Entity đơn giản](#bước-5-tạo-entity-đơn-giản)
6. [Sử dụng Entity trong Service hoặc Controller](#bước-6-sử-dụng-entity-trong-service-hoặc-controller)

---

### Bước 1: Tạo NestJS Project

- Đầu tiên, hãy tạo một NestJS project mới bằng CLI của NestJS:

```bash
# Tạo một project NestJS mới
npx @nestjs/cli new nest-typeorm-example
cd nest-typeorm-example
```

---

### Bước 2: Cài đặt TypeORM và MySQL Driver

- Tiếp theo, chúng ta cần cài đặt TypeORM và MySQL driver thông qua npm:

```bash
# Cài đặt TypeORM và MySQL driver
npm install typeorm mysql
```

---

### Bước 3: Cấu hình TypeORM

- Tạo một file `ormconfig.js` hoặc `ormconfig.json` trong thư mục gốc của dự án để cấu hình kết nối với cơ sở dữ liệu MySQL:

`ormconfig.json`:

```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "your_username",
  "password": "your_password",
  "database": "your_database_name",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}
```

---

### Bước 4: Kết nối với Cơ sở Dữ liệu trong AppModule

- Mở file `app.module.ts` và cấu hình kết nối với cơ sở dữ liệu bằng cách sử dụng `TypeOrmModule.forRoot()`:

```typescript
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "your_username",
      password: "your_password",
      database: "your_database_name",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

### Bước 5: Tạo Entity đơn giản

- Tạo một entity đơn giản để minh họa, ví dụ như `User`:

```typescript
// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

---

### Bước 6: Sử dụng Entity trong Service hoặc Controller

- Bây giờ, bạn có thể sử dụng entity `User` trong một service hoặc controller để thực hiện các thao tác với cơ sở dữ liệu.

- _Ví dụ, trong một service:_

```typescript
// user.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }
}
```

---

Đây chỉ là một ví dụ cơ bản về cách cấu hình và sử dụng TypeORM trong NestJS để kết nối và tương tác với cơ sở dữ liệu MySQL.

---
