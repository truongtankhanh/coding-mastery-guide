Tạo và quản lý migrations là một phần quan trọng trong việc duy trì và cập nhật cơ sở dữ liệu của ứng dụng. Hãy xem xét cách triển khai Migration Rollbacks, Seed Data, Database Versioning và Synchronization trong TypeORM với NestJS.

---

1. [Migration Rollbacks và Seed Data](#migration-rollbacks-và-seed-data)
   - [Migration Rollbacks](#1-migration-rollbacks)
   - [Thêm Seed Data thông qua Migrations](#2-thêm-seed-data-thông-qua-migrations)
2. [Database Versioning và Synchronization](#database-versioning-và-synchronization)
   - [Database Versioning](#1-database-versioning)
   - [Synchronization](#2-synchronization)

---

### Migration Rollbacks và Seed Data:

#### **1. Migration Rollbacks:**

- Migration Rollbacks cho phép bạn hoàn tác các thay đổi cơ sở dữ liệu đã thực hiện trong migrations trước đó.

##### _Ví dụ:_

- Trong TypeORM, việc rollback migrations giúp quay lại phiên bản trước đó của cấu trúc cơ sở dữ liệu nếu cần thiết. Dưới đây là một ví dụ về cách rollback migrations:

Đầu tiên, hãy tạo một migration mới:

```bash
typeorm migration:create -n CreateProductsTable
```

Sau đó, trong file migration vừa được tạo (`CreateProductsTable.ts`), bạn sẽ có một phiên bản migration mới để tạo bảng `products`:

```typescript
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          // ...other columns
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
```

---

Mục `up` trong migration này tạo bảng `products`, còn mục `down` sẽ rollback bảng này.

Sau khi bạn đã chạy migration để tạo bảng, để rollback lại phiên bản trước đó, bạn có thể sử dụng lệnh:

```bash
typeorm migration:revert
```

Lệnh trên sẽ thực hiện rollback migration cuối cùng đã chạy, tức là `down` method trong migration cuối cùng sẽ được thực thi, trong trường hợp này, nó sẽ drop bảng `products`.

Lưu ý rằng việc rollback migrations cần phải được thực hiện cẩn thận và có thể ảnh hưởng đến dữ liệu hiện có trong cơ sở dữ liệu của bạn. Hãy đảm bảo sao lưu dữ liệu quan trọng trước khi thực hiện các thay đổi cấu trúc cơ sở dữ liệu này.

---

#### **2. Thêm Seed Data thông qua Migrations:**

- Seed Data là dữ liệu mẫu, thường được thêm vào cơ sở dữ liệu để có dữ liệu ban đầu hoặc dữ liệu mẫu để phát triển và kiểm tra ứng dụng.

##### _Ví dụ:_

- Để thêm dữ liệu mẫu (seed data) thông qua migrations trong TypeORM, bạn có thể sử dụng các seed data trong các migrations. Dưới đây là một ví dụ:

```typescript
import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedProducts1625233845861 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO products (name, description, price)
      VALUES
        ('Product 1', 'Description for product 1', 20.50),
        ('Product 2', 'Description for product 2', 15.99),
        ('Product 3', 'Description for product 3', 30.00);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Nếu cần, bạn có thể xác định phương thức down để hoàn nguyên việc chèn dữ liệu.
    // Điều này thường liên quan đến việc xóa dữ liệu đã được chèn vào.
    // Để đơn giản, giả sử xóa tất cả dữ liệu khỏi bảng.
    await queryRunner.query("DELETE FROM products");
  }
}
```

---

Trong ví dụ này, `up` method trong migration sẽ thêm dữ liệu seed vào bảng `products`. Còn `down` method sẽ xóa hoặc rollback dữ liệu seed đã được thêm vào.

Sau khi bạn tạo và chạy migration này, dữ liệu seed sẽ được thêm vào cơ sở dữ liệu. Tuy nhiên, hãy cẩn thận khi sử dụng seed data trong migrations, vì việc rollback có thể ảnh hưởng đến dữ liệu hiện có trong cơ sở dữ liệu của bạn.

---

### Database Versioning và Synchronization:

#### **1. Database Versioning:**

- Trong TypeORM, bạn có thể sử dụng các migrations để quản lý phiên bản cơ sở dữ liệu của bạn và đồng bộ hóa chúng với ứng dụng. Mỗi migration tương ứng với một phiên bản cụ thể của cấu trúc cơ sở dữ liệu.

##### _Ví dụ:_

- Dưới đây là một ví dụ:

```typescript
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialSchema1625233845861 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Your initial schema creation SQL queries go here
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      );
      -- More tables or modifications as needed
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // If necessary, define the rollback operation to revert the initial schema creation
    await queryRunner.query(`
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS users;
      -- Additional rollback operations if needed
    `);
  }
}
```

---

Trong ví dụ này, `up` method tạo ra schema ban đầu của cơ sở dữ liệu bằng cách thực thi các truy vấn SQL tạo bảng và cấu trúc dữ liệu khác. `down` method sẽ rollback lại tất cả các thay đổi bằng cách xóa tất cả các bảng đã tạo trong `up` method.

Mỗi migration sẽ có một timestamp duy nhất được sinh ra tự động khi tạo. Khi bạn chạy migrations, TypeORM sẽ duy trì một bảng trong cơ sở dữ liệu để lưu trữ thông tin về các migration đã chạy và để đảm bảo rằng các migrations chỉ chạy một lần duy nhất và theo thứ tự.

---

#### **2. Synchronization:**

- Trong TypeORM, "synchronization" thường được sử dụng để đồng bộ hóa (sync) giữa cấu trúc của các entities và cấu trúc của cơ sở dữ liệu. Khi các thay đổi được thực hiện trong mã nguồn (entities) và bạn muốn đồng bộ hóa các thay đổi này vào cơ sở dữ liệu, bạn có thể sử dụng chức năng synchronization của TypeORM.

##### _Ví dụ:_

Dưới đây là một ví dụ:

```typescript
import { createConnection } from "typeorm";
import { User } from "./entity/User";

// Tạo kết nối với cơ sở dữ liệu
createConnection()
  .then(async (connection) => {
    // Tự động đồng bộ hóa cấu trúc entity với cơ sở dữ liệu
    await connection.synchronize();

    // Các thao tác với cơ sở dữ liệu ở đây
    // Ví dụ: tạo mới một user
    const user = new User();
    user.username = "john_doe";
    user.password = "password123";
    await connection.manager.save(user);

    console.log("Data synchronization completed.");
  })
  .catch((error) => console.log(error));
```

---

Trong ví dụ này, `connection.synchronize()` sẽ kiểm tra cấu trúc của các entities với cấu trúc của cơ sở dữ liệu. Nếu có bất kỳ sự khác biệt nào (ví dụ: bảng mới hoặc thay đổi cấu trúc), TypeORM sẽ cập nhật cơ sở dữ liệu tương ứng để phản ánh cấu trúc của các entities.

Lưu ý rằng việc tự động đồng bộ hóa (`synchronize()`) có thể không phù hợp trong môi trường production vì nó có thể làm mất dữ liệu. Trong môi trường production, thường nên sử dụng migrations để quản lý cấu trúc cơ sở dữ liệu một cách an toàn hơn.

---
