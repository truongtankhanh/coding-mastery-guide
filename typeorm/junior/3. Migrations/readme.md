Để hiểu về migrations trong TypeORM và cách sử dụng chúng để quản lý cấu trúc cơ sở dữ liệu, chúng ta sẽ xem xét lý thuyết cơ bản cùng với ví dụ NestJS để minh họa.

---

1. [Migrations trong TypeORM](#migrations-trong-typeorm)
   - [Migration là gì?](#1-migration-là-gì)
   - [Cách TypeORM Quản lý Migrations](#2-cách-typeorm-quản-lý-migrations)
2. [Minh Họa Trong NestJS](#minh-họa-trong-nestjs)
   - [Tạo Migration](#bước-1-tạo-migration)
   - [Chạy Migration](#bước-2-chạy-migration)
   - [Revert Migration](#bước-3-revert-migration)
3. [Ví dụ NestJS với Migrations](#ví-dụ-nestjs-với-migrations)
   - [Cấu Hình Migrations trong AppModule](#1-cấu-hình-migrations-trong-appmodule)
   - [Tạo Migration](#2-tạo-migration)
   - [Chạy Migration](#3-chạy-migration)
   - [Revert Migration](#4-revert-migration)

---

### Migrations trong TypeORM:

#### **1. Migration là gì?**

- Migrations là các phiên bản của cấu trúc cơ sở dữ liệu, chúng giúp quản lý và duy trì các thay đổi cấu trúc này theo thời gian. Mỗi migration là một bản ghi của thay đổi cấu trúc cơ sở dữ liệu, từ việc thêm hoặc xóa bảng, thay đổi cột, vv.

---

#### **2. Cách TypeORM Quản lý Migrations:**

- TypeORM cung cấp một Command Line Interface (CLI) để tạo, chạy và revert các migrations.

- `typeorm migration:generate`: Tạo một migration mới dựa trên sự khác biệt giữa cấu trúc hiện tại của entities và cấu trúc cơ sở dữ liệu.
- `typeorm migration:run`: Chạy tất cả các migrations chưa được thực thi.
- `typeorm migration:revert`: Revert (hoặc rollback) migration gần nhất.

---

### Minh Họa Trong NestJS:

#### **Bước 1: Tạo Migration**

- Sử dụng CLI để tạo một migration mới:

```bash
npx typeorm migration:generate -n CreateProductTable
```

---

#### **Bước 2: Chạy Migration**

```bash
npx typeorm migration:run
```

---

#### **Bước 3: Revert Migration**

```bash
npx typeorm migration:revert
```

---

### Ví dụ NestJS với Migrations:

#### **1. Cấu Hình Migrations trong AppModule**

- Thêm module TypeOrmModule với cấu hình migrations:

```typescript
// app.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "your_username",
      password: "your_password",
      database: "your_database_name",
      entities: [Product],
      migrations: [__dirname + "/migrations/*.js"], // Đường dẫn tới thư mục chứa migrations
      cli: {
        migrationsDir: "src/migrations", // Thư mục chứa migrations khi tạo mới
      },
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

---

#### **2. Tạo Migration**

```bash
npx typeorm migration:generate -n CreateProductTable
```

---

#### **3. Chạy Migration**

```bash
npx typeorm migration:run
```

---

#### **4. Revert Migration**

```bash
npx typeorm migration:revert
```

---
