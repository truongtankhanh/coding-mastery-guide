Tối ưu hiệu suất trong TypeORM là một phần quan trọng để tăng cường hiệu suất và giảm thiểu thời gian truy cập cơ sở dữ liệu. Hãy xem xét cách sử dụng Batch Operations, Bulk Inserts, Caching và Query Optimization trong NestJS để cải thiện hiệu suất của ứng dụng.

---

1. [Batch Operations và Bulk Inserts](#batch-operations-và-bulk-inserts)
   - [Batch Operations](#1-batch-operations)
   - [Bulk Inserts](#2-bulk-inserts)
2. [Caching và Query Optimization](#caching-và-query-optimization)
   - [Caching](#1-caching)
   - [Query Optimization](#2-query-optimization)

---

### Batch Operations và Bulk Inserts:

#### **1. Batch Operations:**

- Batch Operations cho phép bạn thực hiện nhiều thao tác cơ sở dữ liệu trong một lần gọi, giảm thiểu số lượng truy cập cơ sở dữ liệu.

##### _Ví dụ:_

- Đầu tiên, chúng ta sẽ tạo một entity `Product`:

```typescript
// product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
```

---

- Sau đó, trong một service hoặc một controller của NestJS, bạn có thể sử dụng TypeORM để thêm nhiều sản phẩm cùng một lúc bằng Batch Operations:

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

  async createProducts(productsData: { name: string; price: number }[]) {
    const productsToCreate = productsData.map((data) =>
      this.productRepository.create(data)
    );

    // Sử dụng batch insert để thêm nhiều sản phẩm cùng một lúc
    await this.productRepository.save(productsToCreate);

    return productsToCreate;
  }
}
```

---

Ở đây, `createProducts` nhận một mảng các đối tượng sản phẩm và sử dụng `create` của TypeORM để tạo các instances của entity `Product`. Sau đó, `save` được gọi để thêm các đối tượng này vào cơ sở dữ liệu cùng một lúc.

Khi bạn sử dụng `save` với một mảng các entities, TypeORM sẽ tự động quản lý batch operations cho việc thêm các bản ghi vào cơ sở dữ liệu, tối ưu hóa việc gửi các truy vấn và tăng tốc độ thêm dữ liệu.

---

#### **2. Bulk Inserts:**

- Bulk Inserts là việc thêm một lượng lớn dữ liệu vào cơ sở dữ liệu một cách hiệu quả bằng cách thực hiện một lần gọi thay vì nhiều lần gọi cho từng dòng dữ liệu.

##### _Ví dụ:_

- Để thực hiện Bulk Inserts (chèn hàng loạt) trong TypeORM, bạn có thể sử dụng `createQueryBuilder` kết hợp với `insert().values()` để tạo một truy vấn SQL chứa nhiều giá trị cần chèn vào cơ sở dữ liệu một cách nhanh chóng. Dưới đây là một ví dụ về cách thực hiện Bulk Inserts trong NestJS và TypeORM:

- Giả sử chúng ta có một entity `Product` tương tự như ví dụ trước đó:

```typescript
// product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
```

---

- Sau đó, trong service hoặc controller của NestJS, bạn có thể tạo một phương thức để thực hiện Bulk Inserts:

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

  async createProductsInBulk(productsData: { name: string; price: number }[]) {
    const query = this.productRepository
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsData)
      .execute();

    return query;
  }
}
```

---

Ở đây, `createProductsInBulk` nhận một mảng `productsData` chứa dữ liệu sản phẩm cần chèn vào cơ sở dữ liệu. Chúng ta sử dụng `createQueryBuilder` của TypeORM để tạo một truy vấn insert chứa nhiều giá trị thông qua `.insert().into().values()`, sau đó gọi `.execute()` để thực thi truy vấn này.

Kỹ thuật Bulk Inserts giúp tối ưu hóa việc thêm dữ liệu vào cơ sở dữ liệu bằng cách thực hiện một truy vấn SQL chứa nhiều giá trị cần chèn cùng một lúc, thay vì thực hiện nhiều truy vấn insert riêng lẻ.

---

### Caching và Query Optimization:

#### **1. Caching:**

- Caching là việc lưu trữ kết quả truy vấn trước đó để tránh phải thực hiện lại truy vấn tương tự trong tương lai.

##### _Ví dụ:_

- Để thực hiện Caching với TypeORM trong NestJS, bạn có thể sử dụng các công cụ caching như Redis hoặc Memory Cache để lưu trữ kết quả truy vấn và tối ưu hóa hiệu suất.

- Dưới đây là một ví dụ đơn giản về cách sử dụng Memory Cache trong NestJS để lưu trữ và lấy dữ liệu từ bộ nhớ cache:

```typescript
import {
  Injectable,
  CacheInterceptor,
  CacheTTL,
  UseInterceptors,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(60) // Thời gian lưu cache trong 60 giây
  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }
}
```

---

Trong ví dụ này, `@UseInterceptors(CacheInterceptor)` được sử dụng để áp dụng Interceptor cho phương thức `getAllProducts`, và `@CacheTTL(60)` xác định thời gian sống của cache là 60 giây. Khi phương thức này được gọi lần đầu tiên, nó sẽ lấy dữ liệu từ cơ sở dữ liệu và lưu vào cache. Các lần gọi sau sẽ trả về dữ liệu từ cache nếu nó vẫn còn hiệu lực.

Để sử dụng Redis hoặc các công cụ cache khác, bạn có thể sử dụng các module tương ứng trong NestJS như `@nestjs/microservices` hoặc `cache-manager` để kết nối và quản lý cache của bạn. Lưu ý rằng để sử dụng Redis hoặc các công cụ cache khác, bạn cần cấu hình kết nối tới cache server của mình.

---

#### **2. Query Optimization:**

- Tối ưu hóa truy vấn bằng cách sử dụng index, chọn lọc dữ liệu cần thiết và sử dụng query builder để tối ưu hóa cấu trúc truy vấn.

##### _Ví dụ:_

- Để tối ưu hóa truy vấn trong TypeORM, bạn có thể sử dụng một số kỹ thuật như tối ưu hóa các truy vấn, sử dụng index, sử dụng điều kiện để giới hạn dữ liệu trả về, và tận dụng mối quan hệ giữa các bảng.

- Dưới đây là một ví dụ về việc tối ưu hóa truy vấn trong TypeORM:

```typescript
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

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    // Sử dụng QueryBuilder để tối ưu hóa truy vấn
    return await this.productRepository
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.category", "category")
      .where("category.id = :categoryId", { categoryId })
      .getMany();
  }

  async getExpensiveProducts(): Promise<Product[]> {
    // Sử dụng điều kiện để lọc dữ liệu trả về
    return await this.productRepository.find({
      where: { price: MoreThan(100) },
    });
  }
}
```

---

Trong ví dụ này, chúng ta sử dụng `createQueryBuilder` để tạo một truy vấn có thể được tối ưu hóa tốt hơn với `leftJoinAndSelect` để lấy dữ liệu từ nhiều bảng một cách hiệu quả hơn.

Ngoài ra, phương thức `getExpensiveProducts` sử dụng điều kiện `MoreThan(100)` từ TypeORM để chỉ trả về các sản phẩm có giá trị lớn hơn 100.

Khi tối ưu hóa truy vấn, việc sử dụng các phương thức phức tạp hơn trong QueryBuilder, điều kiện để lọc dữ liệu và tận dụng mối quan hệ giữa các bảng sẽ giúp cải thiện hiệu suất và tối ưu hóa truy vấn của bạn.

---

Thông qua các ví dụ trên, bạn có thể áp dụng Batch Operations, Bulk Inserts, Caching và Query Optimization trong TypeORM với NestJS để cải thiện hiệu suất của ứng dụng và giảm thiểu số lần truy cập cơ sở dữ liệu, tăng tốc độ và hiệu suất của ứng dụng của mình.

---
