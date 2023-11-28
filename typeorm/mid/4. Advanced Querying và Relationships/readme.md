Tạo các truy vấn phức tạp và quản lý mối quan hệ nhiều-nhiều (Many-to-Many) trong TypeORM với NestJS là một phần quan trọng của việc làm việc với cơ sở dữ liệu. Hãy xem xét cách sử dụng Advanced Query Builder Techniques và tạo Custom Join Tables cho mối quan hệ Many-to-Many trong NestJS.

---

1. [Advanced Query Builder Techniques](#advanced-query-builder-techniques)
   - [Sử Dụng Query Builder Techniques](#1-sử-dụng-query-builder-techniques)
   - [Ví dụ về Sử Dụng Query Builder Techniques](#2-ví-dụ-về-sử-dụng-query-builder-techniques)
2. [Many-to-Many Relationships và Custom Join Tables](#many-to-many-relationships-và-custom-join-tables)
   - [Mối Quan Hệ Nhiều-Nhiều](#1-mối-quan-hệ-nhiều-nhiều)
   - [Tạo Custom Join Tables](#2-tạo-custom-join-tables)

---

### Advanced Query Builder Techniques:

#### **1. Sử Dụng Query Builder Techniques:**

- Query Builder cung cấp nhiều phương thức để tạo ra các truy vấn phức tạp hơn, bao gồm các điều kiện, các phép toán logic, các thao tác aggregate, v.v.

---

#### **2. Ví dụ về Sử Dụng Query Builder Techniques:**

Đây là một ví dụ về việc sử dụng Query Builder trong TypeORM để tạo các truy vấn phức tạp:

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

  async findProductsByPriceRange(
    minPrice: number,
    maxPrice: number
  ): Promise<Product[]> {
    const queryBuilder = this.productRepository.createQueryBuilder("product");

    const productsInRange = await queryBuilder
      .where("product.price >= :minPrice", { minPrice })
      .andWhere("product.price <= :maxPrice", { maxPrice })
      .orderBy("product.price", "ASC")
      .getMany();

    return productsInRange;
  }
}
```

- Trong ví dụ này, chúng ta sử dụng `createQueryBuilder` từ `productRepository` để tạo một query builder cho entity `Product`. Sau đó, chúng ta có thể sử dụng các phương thức của query builder như `where`, `andWhere`, `orderBy` để xây dựng truy vấn phức tạp.

- Ở đây, `findProductsByPriceRange` sẽ trả về một danh sách các sản phẩm có giá nằm trong khoảng từ `minPrice` đến `maxPrice`, được sắp xếp theo giá tăng dần.

- Điều quan trọng là, khi sử dụng Query Builder, bạn có thể xây dựng các truy vấn phức tạp mà không cần phụ thuộc vào ngôn ngữ SQL cụ thể, mà thay vào đó sử dụng các phương thức được cung cấp bởi Query Builder của TypeORM.

---

### Many-to-Many Relationships và Custom Join Tables:

#### **1. Mối Quan Hệ Nhiều-Nhiều:**

- Mối quan hệ nhiều-nhiều giữa các entities trong TypeORM có thể được xác định bằng cách sử dụng decorator `@ManyToMany`.

---

Để minh họa mối quan hệ nhiều-nhiều trong TypeORM, hãy xem xét một ví dụ giữa hai entity, `Product` và `Category`, có mối quan hệ nhiều-nhiều thông qua một bảng trung gian `ProductCategory`.

Đầu tiên, ta sẽ định nghĩa các entity:

```typescript
// product.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];
}

// category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
```

Sau khi định nghĩa các entity, bạn có thể sử dụng chúng trong service hoặc controller:

```typescript
// product-category.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { Category } from "./category.entity";

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async assignCategoryToProduct(
    productId: number,
    categoryId: number
  ): Promise<Product> {
    const product = await this.productRepository.findOne(productId, {
      relations: ["categories"],
    });
    const category = await this.categoryRepository.findOne(categoryId);

    if (!product || !category) {
      throw new Error("Product or Category not found.");
    }

    product.categories = [...product.categories, category];
    return this.productRepository.save(product);
  }

  async findProductsByCategory(categoryId: number): Promise<Product[]> {
    return this.productRepository
      .createQueryBuilder("product")
      .innerJoin("product.categories", "category")
      .where("category.id = :categoryId", { categoryId })
      .getMany();
  }
}
```

Trong ví dụ này, chúng ta đã thiết lập mối quan hệ nhiều-nhiều giữa `Product` và `Category` thông qua các annotation `@ManyToMany`. Hàm `assignCategoryToProduct` được sử dụng để gán một `Category` cho một `Product`, trong khi `findProductsByCategory` giúp tìm các sản phẩm thuộc một `Category` cụ thể.

---

#### **2. Tạo Custom Join Tables:**

-- Khi cần thiết, bạn có thể tạo các bảng join tùy chỉnh để quản lý mối quan hệ nhiều-nhiều.

---

Trong TypeORM, bạn có thể định nghĩa các bảng join tùy chỉnh khi có mối quan hệ giữa các entity. Dưới đây là một ví dụ về cách tạo một bảng join tùy chỉnh giữa `User` và `Group`.

Đầu tiên, định nghĩa các entity:

```typescript
// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Group } from "./group.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Group, (group) => group.users)
  groups: Group[];
}

// group.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.groups)
  users: User[];
}
```

Sau đó, bạn có thể tạo một entity mới để đại diện cho bảng join tùy chỉnh:

```typescript
// user-group.entity.ts
import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";
import { Group } from "./group.entity";

@Entity()
export class UserGroup {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  groupId: number;

  @ManyToOne(() => User, (user) => user.groups)
  user: User;

  @ManyToOne(() => Group, (group) => group.users)
  group: Group;
}
```

Cuối cùng, chỉ định cách TypeORM nên quản lý quan hệ này:

```typescript
// user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { UserGroup } from "./user-group.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Group, (group) => group.users)
  @JoinTable({ name: "user_group" })
  groups: Group[];
}

// group.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { UserGroup } from "./user-group.entity";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.groups)
  @JoinTable({ name: "user_group" })
  users: User[];
}
```

Trong ví dụ này, `UserGroup` là entity đại diện cho bảng join tùy chỉnh giữa `User` và `Group`. Các annotation `@ManyToOne`, `@ManyToMany` và `@JoinTable` được sử dụng để xác định quan hệ giữa các entity và bảng join tùy chỉnh.

---
