Tính nhất quán dữ liệu và kiểm soát đồng thời là hai khía cạnh quan trọng trong việc quản lý cơ sở dữ liệu. Sử dụng Transactions và Concurrency Control trong TypeORM với NestJS có thể giúp đảm bảo tính toàn vẹn và đồng bộ của dữ liệu. Hãy xem xét cách thực hiện Transactions và các phương pháp kiểm soát đồng thời trong NestJS.

---

1. [Transactions](#transactions)
   - [Sử Dụng Transactions](#1-sử-dụng-transactions)
   - [Ví dụ về Sử Dụng Transactions](#2-ví-dụ-về-sử-dụng-transactions)
2. [Optimistic và Pessimistic Concurrency Control](#optimistic-và-pessimistic-concurrency-control)
   - [Optimistic Concurrency Control](#1-optimistic-concurrency-control)
   - [Pessimistic Concurrency Control](#2-pessimistic-concurrency-control)

---

### Transactions:

#### **1. Sử Dụng Transactions:**

- Transactions giúp đảm bảo rằng một nhóm các thao tác cơ sở dữ liệu được thực hiện hoàn toàn hoặc không thực hiện gì cả nếu có lỗi xảy ra.

---

#### **2. Ví dụ về Sử Dụng Transactions:**

```typescript
import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager
  ) {}

  async updateProductAndCreateLog(
    product: Product,
    logData: any
  ): Promise<void> {
    await this.entityManager
      .transaction(async (transactionalEntityManager) => {
        // Bắt đầu một transaction
        await transactionalEntityManager.save(product);

        // Thực hiện các hành động khác trong transaction
        await transactionalEntityManager.insert("log", logData);

        // Nếu mọi thứ OK, commit transaction
        await transactionalEntityManager.commit();
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Transaction failed. Rolling back...", error);
        return;
      });
  }
}
```

---

- Trong ví dụ này, `updateProductAndCreateLog` chứa một transaction trong đó ta thực hiện việc lưu thông tin của sản phẩm vào cơ sở dữ liệu (`save`) cùng với việc tạo một bản ghi log (`insert`). Nếu mọi thứ diễn ra thành công, transaction sẽ được commit. Nếu có lỗi xảy ra, transaction sẽ được rollback.

- Cần lưu ý rằng việc sử dụng transactions đòi hỏi cẩn thận, và nên đảm bảo rằng các thao tác trong transaction không kéo dài quá lâu để tránh khoá cơ sở dữ liệu.

- Đối với các tác vụ phức tạp hơn, bạn có thể sử dụng nhiều phương thức khác nhau của `transactionalEntityManager` để thực hiện nhiều hành động và xử lý lỗi một cách linh hoạt trong một transaction.

---

### Optimistic và Pessimistic Concurrency Control:

#### **1. Optimistic Concurrency Control:**

- Optimistic Concurrency Control (OCC) trong TypeORM giúp kiểm soát xung đột dữ liệu thông qua việc sử dụng phiên bản hoặc trường dữ liệu để kiểm tra xem liệu dữ liệu đã bị thay đổi từ khi được đọc lần cuối hay không trước khi lưu thay đổi.

Dưới đây là một ví dụ minh họa về cách sử dụng OCC trong NestJS và TypeORM:

```typescript
import { Injectable, ConflictException } from "@nestjs/common";
import { Repository, UpdateResult } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: Repository<Product>) {}

  async updateProduct(product: Product): Promise<Product> {
    const existingProduct = await this.productRepository.findOne(product.id);

    if (!existingProduct) {
      throw new ConflictException("Product does not exist.");
    }

    if (existingProduct.version !== product.version) {
      throw new ConflictException("Data has been modified by another process.");
    }

    const updatedProduct: UpdateResult = await this.productRepository.update(
      { id: product.id, version: product.version }, // Kiểm tra phiên bản trước khi cập nhật
      { ...product, version: product.version + 1 } // Tăng phiên bản lên sau khi cập nhật
    );

    if (updatedProduct.affected === 0) {
      throw new ConflictException("Data has been modified by another process.");
    }

    return await this.productRepository.findOne(product.id);
  }
}
```

Trong ví dụ này, chúng ta cần sử dụng trường `version` trong entity `Product` để kiểm tra xem liệu dữ liệu đã được thay đổi từ khi đọc lần cuối hay không trước khi cập nhật. Nếu phiên bản đã được thay đổi, một ngoại lệ `ConflictException` sẽ được ném ra để xử lý xung đột dữ liệu.

Sử dụng phiên bản hoặc trường dữ liệu để kiểm tra xung đột là một cách hiệu quả để tránh việc ghi đè dữ liệu do nhiều người dùng cùng cập nhật cùng một bản ghi trong cơ sở dữ liệu.

---

#### **2. Pessimistic Concurrency Control:**

- Pessimistic Concurrency Control (PCC) trong TypeORM cho phép bạn khóa các bản ghi trong cơ sở dữ liệu để ngăn chặn các thay đổi xung đột từ các phiên làm việc khác nhau.

Dưới đây là một ví dụ minh họa về cách sử dụng PCC trong NestJS và TypeORM:

```typescript
import { Injectable } from "@nestjs/common";
import { Repository, Transaction, TransactionRepository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: Repository<Product>) {}

  @Transaction()
  async updateProductWithPessimisticLock(
    productId: number,
    @TransactionRepository(Product) productRepository?: Repository<Product>
  ): Promise<Product> {
    const entityManager = productRepository || this.productRepository;

    await entityManager.query("BEGIN TRANSACTION");
    try {
      const product = await entityManager.findOne(productId, {
        lock: { mode: "pessimistic_write" },
      });

      if (!product) {
        throw new Error("Product not found.");
      }

      product.price += 10; // Thay đổi dữ liệu

      const updatedProduct = await entityManager.save(product);
      await entityManager.query("COMMIT");

      return updatedProduct;
    } catch (error) {
      await entityManager.query("ROLLBACK");
      throw error;
    }
  }
}
```

Trong ví dụ này, chúng ta sử dụng `lock: { mode: 'pessimistic_write' }` để khóa bản ghi khi đọc nó. Khi một bản ghi được khóa bởi một phiên làm việc, các phiên làm việc khác sẽ không thể thay đổi bản ghi này cho đến khi khóa được giải phóng.

Cần chú ý rằng việc sử dụng PCC có thể ảnh hưởng đến hiệu suất của ứng dụng, đặc biệt nếu khóa được giữ trong thời gian dài. Hãy sử dụng PCC khi thực sự cần thiết và cân nhắc kỹ lưỡng để tránh tình trạng khóa dữ liệu không cần thiết.

---
