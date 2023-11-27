Tạo và quản lý migrations là một phần quan trọng trong việc duy trì và cập nhật cơ sở dữ liệu của ứng dụng. Hãy xem xét cách triển khai Migration Rollbacks, Seed Data, Database Versioning và Synchronization trong TypeORM với NestJS.

### Migration Rollbacks và Seed Data:

#### 1. Migration Rollbacks:

Migration Rollbacks cho phép bạn hoàn tác các thay đổi cơ sở dữ liệu đã thực hiện trong migrations trước đó.

#### 2. Thêm Seed Data thông qua Migrations:

Seed Data là dữ liệu mẫu, thường được thêm vào cơ sở dữ liệu để có dữ liệu ban đầu hoặc dữ liệu mẫu để phát triển và kiểm tra ứng dụng.

#### 3. Ví dụ về Migration Rollbacks và Seed Data:

```typescript
// db-migration.ts
import { MigrationInterface, QueryRunner } from "typeorm";

export class ExampleMigration1632432540000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Logic để tạo schema hoặc thực hiện thay đổi cấu trúc cơ sở dữ liệu
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Logic để hoàn tác thay đổi đã thực hiện
  }
}

// seed-data-migration.ts
import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedData1632432550000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Thêm dữ liệu mẫu vào cơ sở dữ liệu
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Loại bỏ dữ liệu mẫu khỏi cơ sở dữ liệu
  }
}
```

### Database Versioning và Synchronization:

#### 1. Database Versioning:

Database Versioning là việc theo dõi và quản lý các phiên bản của cơ sở dữ liệu, giúp đảm bảo rằng cấu trúc của cơ sở dữ liệu phù hợp với ứng dụng.

#### 2. Synchronization:

Synchronization là quá trình đồng bộ hóa giữa cấu trúc cơ sở dữ liệu hiện tại và phiên bản được xác định.

#### 3. Ví dụ về Database Versioning và Synchronization:

```typescript
// ormconfig.json
{
  "synchronize": false, // Đặt synchronize thành false để không tự động đồng bộ cơ sở dữ liệu
  // ...
}

// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await createConnection(); // Tạo kết nối với cơ sở dữ liệu
  await app.listen(3000);
}
bootstrap();
```

Thông qua các ví dụ trên, bạn có thể triển khai Migration Rollbacks, Seed Data và quản lý Database Versioning cũng như Synchronization trong TypeORM với NestJS để duy trì và cập nhật cơ sở dữ liệu của ứng dụng một cách hiệu quả.
