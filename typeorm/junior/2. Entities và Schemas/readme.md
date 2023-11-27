1. [Entities trong TypeORM](#entities-trong-typeorm)
2. [Decorators và Các Annotation trong TypeScript](#decorators-và-các-annotation-trong-typescript)
3. [Ví dụ về Entities và Decorators trong NestJS với TypeORM](#ví-dụ-về-entities-và-decorators-trong-nestjs-với-typeorm)
   - [Tạo Entity](#bước-1-tạo-entity-product)
   - [Sử dụng Entity trong AppModule](#bước-2-sử-dụng-entity-trong-appmodule)
   - [Sử dụng Entity trong Service hoặc Controller](#bước-3-sử-dụng-entity-trong-service-hoặc-controller)

---

### Entities trong TypeORM:

- Trong TypeORM, các entities là các đại diện của các bảng trong cơ sở dữ liệu. Chúng được định nghĩa bằng các class trong TypeScript, mỗi instance của class tương ứng với một hàng trong bảng cơ sở dữ liệu.

---

### Decorators và Các Annotation trong TypeScript:

- Trong TypeScript, các decorators là các hàm đặc biệt được sử dụng để thêm metadata hoặc chức năng bổ sung cho các phần của code, chẳng hạn như class, method hoặc property. Decorators trong TypeORM được sử dụng để đánh dấu các entities và thuộc tính của chúng để TypeORM có thể hiểu và tạo bản đồ tương ứng với cơ sở dữ liệu.

---

### Ví dụ về Entities và Decorators trong NestJS với TypeORM:

- Để minh họa, chúng ta sẽ tạo một entity `Product` đơn giản trong NestJS để đại diện cho một bảng trong cơ sở dữ liệu.

#### **Bước 1: Tạo Entity `Product`**

Tạo một class `Product` và sử dụng các decorators từ TypeORM để định nghĩa entity và các trường của nó:

```typescript
// product.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;
}
```

- **`@Entity()`** decorator đánh dấu class `Product` là một entity của TypeORM.
- **`@PrimaryGeneratedColumn()`** decorator định nghĩa trường `id` là trường primary key và tự động tạo giá trị duy nhất.
- **`@Column()`** decorator được sử dụng để định nghĩa các trường trong bảng cơ sở dữ liệu, ví dụ như `name`, `description`, `price`.

---

#### **Bước 2: Sử dụng Entity trong AppModule**

- Như đã thảo luận trong phần trước, hãy thêm `Product` entity vào AppModule để TypeORM có thể tìm thấy nó:

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
      entities: [Product], // Định nghĩa entities sẽ sử dụng trong kết nối
      synchronize: true, // Đồng bộ hóa cấu trúc entities với cơ sở dữ liệu (khuyến nghị chỉ sử dụng trong môi trường phát triển)
    }),
    TypeOrmModule.forFeature([Product]), // Thêm Product entity vào AppModule
  ],
})
export class AppModule {}
```

---

#### **Bước 3: Sử dụng Entity trong Service hoặc Controller**

- Inject repository của `Product` vào service hoặc controller để thực hiện các thao tác CRUD:

```typescript
// product.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async createProduct(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }

  // Các hàm khác như updateProduct, deleteProduct, vv.
}
```

---

Đây là một ví dụ cơ bản về cách sử dụng entities và decorators trong TypeORM của NestJS để định nghĩa và tương tác với cơ sở dữ liệu.

---
